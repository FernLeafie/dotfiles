function qutestyles
  set -l lightFlavor "mocha"
  set -l darkFlavor "mocha"
  set -l accentColor "mauve"

  # for anilist
  set -l choiceContrastColor "red"
  # for bstats
  set -l choiceGraphUseAccentColor 0
  # for chatreplay
  set -l choiceBgOpacity 0.2
  set -l choiceBgBlur 20
  # for chess.com
  set -l choiceHighlightColor1 "red"
  set -l choiceHighlightColor2 "green"
  set -l choiceHighlightColor3 "peach"
  set -l choiceHighlightColor4 "blue"
  set -l choiceStyleBoardAndPieces 1
  # for ichi.moe
  set -l choiceZen 0
  # for invidious
  set -l choiceStyleVideoPlayer 1
  # for lichess
  set -l choiceLastMoveColor "red"
  set -l choiceCheckColor "red"
  set -l choiceStylePieces 1
  set -l choiceStyleBoard 1
  # for microsoft-word
  set -l choiceApplyToDocument 0
  # for migadu-webmail
  set -l choiceHideProfilePictures 0
  # for searxng
  set -l choiceAdditions 0
  # for syncthing
  set -l choiceUrls "127\.0\.0\.1\:8384,0\.0\.0\.0\:8384,localhost\:8384" 
  # for twitter
  set -l choiceColorizeLogo 0
  set -l choiceDarkenShadows 1
  # for whatsapp-web
  set -l choiceLighterMessages 0
  # for wiki.nixos.org
  set -l choiceHighlightRedirect 0
  # for youtube
  set -l choiceLogo 1
  set -l choiceOled 0
  set -l choiceSponsorBlock 1
  set -l choiceHideColorSampleTint 1

  set -l names (ls ./styles)
  rm output/stylemap.py
  mkdir -p output/styles
  mkdir -p output/tmp/styles
  touch output/stylemap.py
  echo "styles = {" >> output/stylemap.py

  # main loop
  for name in $names
    set -l file "./styles/$name/catppuccin.user.less"
    set -l tmpLess "./output/tmp/styles/$name.less"
    set -l tmpCss "./output/tmp/styles/$name.css"
    set -l result "./output/styles/$name.css"
    
    set -l domain (cat $file | grep -oP '(?<=domain\(")[^"]+(?="\))')
    if string length -q $domain
      for i in (seq (count $domain))
        set domain[$i] (string join '' "'*" $domain[$i] "*'")
      end
    end

    set -l urlprefix (cat $file | grep -oP '(?<=url-prefix\(")[^"]+(?="\))')
    if string length -q $urlprefix
      for i in (seq (count $urlprefix))
        set urlprefix[$i] (string join '' "'" $urlprefix[$i] "*'")
      end
    end

    set -l regexp (cat $file | grep -oP '(?<=regexp\(")[^"]+(?="\))') (cat $file | grep 'regexp($' -A 1 | grep -oP '(?<=")[^"]+(?=")')
    if string length -q $regexp
      for i in (seq (count $regexp))
        set regexp[$i] (string join '' "r'" $regexp[$i] "'")
      end
    end

    set -l links $domain $urlprefix $regexp
    echo -s "    '" $name ".css': [" (string join ", " $links) "]," >> output/stylemap.py
    
    touch $tmpLess

    # global styling choices
    echo -s '@lightFlavor: ' $lightFlavor ';' >> $tmpLess
    echo -s '@darkFlavor: ' $darkFlavor ';' >> $tmpLess
    echo -s '@accentColor: ' $accentColor ';' >> $tmpLess

    # handles website specific choices
    switch $name
    case "anilist"
      echo -s '@contrastColor: ' $choiceContrastColor ';' >> $tmpLess
    case "bstats"
      echo -s '@graphUseAccentColor: ' $choiceGraphUseAccentColor ';'>> $tmpLess
    case "chatreplay"
      echo -s '@bg-opacity: ' $choiceBgOpacity ';'>> $tmpLess
      echo -s '@bg-blur: ' $choiceBgBlur ';'>> $tmpLess
    case "chess.com"
      echo -s '@highlightColor1: ' $choiceHighlightColor1 ';' >> $tmpLess
      echo -s '@highlightColor2: ' $choiceHighlightColor2 ';' >> $tmpLess
      echo -s '@highlightColor3: ' $choiceHighlightColor3 ';' >> $tmpLess
      echo -s '@highlightColor4: ' $choiceHighlightColor4 ';' >> $tmpLess
      echo -s '@styleBoardAndPieces: ' $choiceStyleBoardAndPieces ';' >> $tmpLess
    case "ichi.moe"
      echo -s '@zen: ' $choiceZen ';' >> $tmpLess
    case "invidious"
      echo -s '@styleVideoPlayer: ' $choiceStyleVideoPlayer ';' >> $tmpLess
    case "lichess"
      echo -s '@lastMoveColor: ' $choiceLastMoveColor ';' >> $tmpLess
      echo -s '@checkColor: ' $choiceCheckColor ';' >> $tmpLess
      echo -s '@stylePieces: ' $choiceStylePieces ';' >> $tmpLess
      echo -s '@styleBoard: ' $choiceStyleBoard ';' >> $tmpLess
    case "microsoft-word"
      echo -s '@applyToDocument: ' $choiceApplyToDocument ';' >> $tmpLess
    case "migadu-webmail"
      echo -s '@hideProfilePictures: ' $choiceHideProfilePictures ';' >> $tmpLess
    case "searxng"
      echo -s '@additions: ' $choiceAdditions ';' >> $tmpLess
    case "syncthing"
      echo -s '@urls: ' $choiceUrls ';' >> $tmpLess
    case "twitter"
      echo -s '@colorizeLogo: ' $choiceColorizeLogo ';' >> $tmpLess
      echo -s '@darkenShadows: ' $choiceDarkenShadows ';' >> $tmpLess
    case "whatsapp-web"
      echo -s '@lighterMessages: ' $choiceLighterMessages ';' >> $tmpLess
    case "wiki.nixos.org"
      echo -s '@highlight-redirect: ' $choiceHighlightRedirect ';' >> $tmpLess
    case "youtube"
      echo -s '@logo: ' $choiceLogo ';' >> $tmpLess
      echo -s '@oled: ' $choiceOled ';' >> $tmpLess
      echo -s '@sponsorBlock: ' $choiceSponsorBlock ';' >> $tmpLess
      echo -s '@hideColorSampleTint: ' $choiceHideColorSampleTint ';' >> $tmpLess
    end
    
    # rest of the file
    cat $file >> $tmpLess
    
    # transpile temporary less file into temporary css file
    lessc --quiet-deprecations $tmpLess $tmpCss

    # create the result file and prepare it for qutebrowser
    touch $result
    cat $tmpCss | sed 's/^@-moz-document.*$//g; s/^}//g; s/^  //g' >> $result
  end

  # remove temporary files (only exists because lessc cant work on stdin)
  rm ./output/tmp -r
  echo "}" >> output/stylemap.py
  echo (set_color --bold green) "Done!"
end
