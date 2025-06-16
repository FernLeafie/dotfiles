#!/usr/bin/env bash

################################################################################
# Script to record screen with wf-recorder, detecting monitors with hyprctl
# or xrandr. Prefers "HDMI-A-1" if enabled; otherwise, uses "eDP-1".
#
# Usage:
# record.sh fullscreen -> Record full screen
# record.sh section -> Record a region with slurp
# record.sh stop -> Stop recording
################################################################################

SAVEDIR="$HOME/Videos/record"
mkdir -p "$SAVEDIR"

PIDFILE="/tmp/wf-recorder.pid"
VIDFILE="/tmp/wf-recorder-video.txt"

###############################################################################
# Function to detect the monitor we will use
###############################################################################
detect_output() {
  local ACTIVE_MONITORS=""

  # 1) Detect available tools
  if command -v hyprctl &> /dev/null; then
    # hyprctl
    ACTIVE_MONITORS=$(hyprctl monitors | grep "Monitor" | awk '{print $2}')
  elif command -v xrandr &> /dev/null; then
    # xrandr
    ACTIVE_MONITORS=$(xrandr --listactivemonitors | tail -n +2 | awk '{print $NF}')
  else
    # Neither hyprctl nor xrandr was found.
    echo "Error: No hyprctl or xrandr detected." >&2
    exit 1
  fi

  # 2) Check which of the monitors interests us
  if echo "$ACTIVE_MONITORS" | grep -q "HDMI-A-1"; then
    OUTPUT="HDMI-A-1"
  elif echo "$ACTIVE_MONITORS" | grep -q "eDP-1"; then
    OUTPUT="eDP-1"
  else
    # If we don't detect anything, we force eDP-1 as fallback
    OUTPUT="eDP-1"
  fi
}

###############################################################################
# Function to generate the following file name: Video1.mp4, Video2.mp4, etc.
###############################################################################
get_next_filename() {
  local file_num=1
  while [ -e "$SAVEDIR/Video${file_num}.mp4" ]; do
    ((file_num++))
  done
  echo "$SAVEDIR/Video${file_num}.mp4"
}

###############################################################################
# Full screen recording
###############################################################################
start_fullscreen() {
  detect_output  # Determine which of the two monitors to use

  local FILENAME
  FILENAME="$(get_next_filename)"

  wf-recorder \
    -a \
    -o "$OUTPUT" \
    -c h264_vaapi \
    -f "$FILENAME" &

  PID=$!
  echo "$PID" > "$PIDFILE"
  echo "$FILENAME" > "$VIDFILE"

  notify-send "Grabación iniciada" \
              "Grabando en $OUTPUT\nArchivo: $(basename "$FILENAME")"
}

###############################################################################
# Recording a selected section
###############################################################################
start_section() {
  detect_output

  if ! command -v slurp &>/dev/null; then
    notify-send "Error" "No 'slurp' found to select a region."
    exit 1
  fi

  local GEOMETRY
  GEOMETRY="$(slurp)"
  if [ -z "$GEOMETRY" ]; then
    notify-send "Recording Cancelled" "No region selected."
    exit 0
  fi

  local FILENAME
  FILENAME="$(get_next_filename)"

  wf-recorder \
    -a \
    -o "$OUTPUT" \
    -c h264_vaapi \
    -g "$GEOMETRY" \
    -f "$FILENAME" &

  PID=$!
  echo "$PID" > "$PIDFILE"
  echo "$FILENAME" > "$VIDFILE"

  notify-send "Recording started" \
              "Writing region: $GEOMETRY to $OUTPUT\nFile: $(basename "$FILENAME")"
}

###############################################################################
# Stop recording
###############################################################################
stop_recording() {
  if [ -f "$PIDFILE" ]; then
    local PID
    PID="$(cat "$PIDFILE")"
    kill "$PID" 2>/dev/null
    rm "$PIDFILE"

    local FILE_RECORDED="(unknown)"
    if [ -f "$VIDFILE" ]; then
      FILE_RECORDED="$(cat "$VIDFILE")"
      rm "$VIDFILE"
    fi

    notify-send "Recording stopped" \
                "Saved file: $(basename "$FILE_RECORDED")"
  else
    notify-send "Error" "No recording in progress was found."
  fi
}

###############################################################################
# Main logic according to the parameter
###############################################################################
case "$1" in
  fullscreen)
    start_fullscreen
    ;;
  section)
    start_section
    ;;
  stop)
    stop_recording
    ;;
  *)
    echo "Use: $0 {fullscreen|section|stop}"
    exit 1
    ;;
esac
