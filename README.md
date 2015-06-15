# Pac-Man in < 512 Bytes of HTML+JS

Based on the the [oldskool remake by @maettig ](http://maettig.com/code/javascript/pac-man-in-140byt.es.html) of the classic arcade game Pac-Man. Golfed down by @aemkei, @p01, @subzey, @xem, @0ndras, @maettig. See the original [gist](https://gist.github.com/maettig/1384306).

### Demo

[PLAY THE DEMO](http://output.jsbin.com/hitige/quiet)!

Use your keyboard to control the movement.

### Source (430 Bytes)

```html
<pre id=p><script>l="";for(i in L=[a=8191,b=4161,c=5981,d
=5125,5493,5397,5589,d,c,b,a])l+=L[i].toString(2).replace
(/1/g,4).replace(/0/g,2)+3;l=l.split(""),w=14,x=76,X=48,d
=k=D=!setInterval(onkeydown=function(n){for(n&&(k=n.which
-38,Q),l[x]=0,8&l[x+=d=k+1>>2||4&l[x+(o=k%2?k:k*w-w)]?4&l
[x+d]?0:d:o],l[x]=1,l[X]&=7,b=D%4,b=b%2?b-2:(b-1)*w,4&l[X
+b]?D++:X+=b,l[X]|=8,h=i=0;153>i;)h+=" o.\n#   xxx"[l[++i
]];p.innerHTML=h},250)</script>
```

### Gameplay Video

![Pac-Man](https://raw.githubusercontent.com/codegolf/pac-man/master/pacman.gif)

### Board Layout

```
#############
#     #    .#       #   = Wall
# ### # ###.#
# # X    .#.#       X   = Ghost
# # # ###.#.#
# # # o #.#.#       o   = Player
# # ### #.#.#
# # ......#.#       .   = Gold
# ### #.###.#
#.....#.....#
#############
```

### Annotated Source

```html
<pre id=p><script>
l = "";
for (i in L = [
  a = 8191,                               // #############
  b = 4161,                               // #     #     #
  c = 5981,                               // # ### # ### #
  d = 5125,                               // # #       # #
  5493,                                   // # # # ### # #
  5397,                                   // # # #   # # #
  5589,                                   // # # ### # # #
  d,                                      // # #       # #
  c,                                      // # ### # ### #
  b,                                      // #     #     #
  a                                       // #############
]
) l += L[i]
  .toString(2)                            // convert to binary
  .replace(/1/g, 4)                       // replace full blocks
  .replace(/0/g, 2)                       // repace empty blocks
  + 3;                                    // placeholder for \n

l = l.split(""),

w = 14,                                   // width
x = 76,                                   // players x position
X = 48,                                   // ghost x position

d =                                       // player direction
k =                                       // last keycode
D = !                                     // ghost direction

setInterval(onkeydown = function(a) {
  for (
    a && (k = a.which - 38, Q),           // get key code

    l[x] = 0,                             // reset cell
    8 & l[                                // test if player hits ghost
      x += d = k + 1 >> 2 || 4 & l[       // update player direction
        x + (                             // update player position
          o =                             // calculate offset
            k % 2 ?                       // horizontal or vertical movement
              k  :                        // = horizontal
              k * w - w                   // = vertical
        )
      ] ? 4 & l[x + d] ? 0 : d : o        // detect wall collision
    ],
    l[x] = 1,                             // set player at new position
    l[X] &= 7,                            // remove ghost first

    b = D % 4,
    b = b % 2 ? b - 2 : (b - 1) * w,      // calculate walking direction
    4 & l[X + b]                          // if walking into a wall
      ? D++                               // rotate ghost by 90 degree
      : X += b                            // else walk
      ,
      l[X] |= 8,                          // place ghost

      h = i = 0;
      153 > i;
  )
    h += " o.\n#   xxx"                   // 0 =   = empty
                                          // 1 = o = player
                                          // 2 = . = gold
                                          // 4 = # = wall
                                          // 8 = x = ghost
                                          // 3 = \n placeholder
     [l[++i]]                             // get character


  p.innerHTML = h
}, 250)
</script>
```
