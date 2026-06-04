function arknightsstats
  rm stats.csv
  touch stats.csv
  # set -l IFS
  # set -l links https://arknights.wiki.gg/wiki/Angelina https://arknights.wiki.gg/wiki/Amiya
  set -l operators (curl -s https://arknights.wiki.gg/wiki/Operator/List | tidy -i -w 0 -q --show-errors 0 --show-warnings false | sed "s/^ *//g" | grep "field_Name" -A 1 | grep -oP '(?<=href=")[^"]+(?=")')
  set -l links
  # echo (count $operators)
  # echo (seq 1 (count $operators))
  for i in (seq 1 (count $operators))
    # echo $i
    set -a links (string join '' 'https://arknights.wiki.gg' "$operators[$i]")
  end
  # echo $operators
  # echo $links

  set -l IFS

  for link in $links
    set -l page (curl -s $link | tidy -i -w 0 -q --show-errors 0 --show-warnings false | sed "s/^ *//g")
    set -l name (echo $page | grep "druid-title" -A 1 | sed -n "2p")
    set -l gender (echo $page | grep "druid-data-gender" -A 1 | sed -n "2p")
    set -l race (echo $page | grep "druid-data-race" -A 1 | sed -n "2p" | sed "s/<[^>]*>//g")
    set -l height (echo $page | grep "druid-data-height" -A 1 | sed -n "2p")
    set -l class (echo $page | grep '<td width="11%"><b>Class</b></td>' -A 2 | sed -n "s/^ *//g; 3p" | grep -oP '[A-Za-z]+(?=<\\/a>$)')
    echo (string join "," $name $gender $race $height $class) >> stats.csv
    if string length -q $page
      echo "page recieved"
    end
    echo "success:" $name
    sleep 5
  end
end
