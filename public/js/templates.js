const LOGO_DATA_URI = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAH0CAIAAABEtEjdAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAE22lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSfvu78nIGlkPSdXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQnPz4KPHg6eG1wbWV0YSB4bWxuczp4PSdhZG9iZTpuczptZXRhLyc+CjxyZGY6UkRGIHhtbG5zOnJkZj0naHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyc+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpBdHRyaWI9J2h0dHA6Ly9ucy5hdHRyaWJ1dGlvbi5jb20vYWRzLzEuMC8nPgogIDxBdHRyaWI6QWRzPgogICA8cmRmOlNlcT4KICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0nUmVzb3VyY2UnPgogICAgIDxBdHRyaWI6Q3JlYXRlZD4yMDI1LTAyLTA2PC9BdHRyaWI6Q3JlYXRlZD4KICAgICA8QXR0cmliOkV4dElkPmQ1ZmExMGY3LTY2NzAtNDdkOC04Yjk5LTE5ZGU1ZTBjY2ZjYTwvQXR0cmliOkV4dElkPgogICAgIDxBdHRyaWI6RmJJZD41MjUyNjU5MTQxNzk1ODA8L0F0dHJpYjpGYklkPgogICAgIDxBdHRyaWI6VG91Y2hUeXBlPjI8L0F0dHJpYjpUb3VjaFR5cGU+CiAgICA8L3JkZjpsaT4KICAgPC9yZGY6U2VxPgogIDwvQXR0cmliOkFkcz4KIDwvcmRmOkRlc2NyaXB0aW9uPgoKIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PScnCiAgeG1sbnM6ZGM9J2h0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvJz4KICA8ZGM6dGl0bGU+CiAgIDxyZGY6QWx0PgogICAgPHJkZjpsaSB4bWw6bGFuZz0neC1kZWZhdWx0Jz5CbGFjayBNaW5pbWFsaXN0IFNpbXBsZSBQZXJzb25hbCBOYW1lIExvZ28gLSAxPC9yZGY6bGk+CiAgIDwvcmRmOkFsdD4KICA8L2RjOnRpdGxlPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczpwZGY9J2h0dHA6Ly9ucy5hZG9iZS5jb20vcGRmLzEuMy8nPgogIDxwZGY6QXV0aG9yPkFiZHVsbGFoIFNpZGRpcXVpPC9wZGY6QXV0aG9yPgogPC9yZGY6RGVzY3JpcHRpb24+CgogPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9JycKICB4bWxuczp4bXA9J2h0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8nPgogIDx4bXA6Q3JlYXRvclRvb2w+Q2FudmEgZG9jPURBR2FWek5Uay1BIHVzZXI9VUFGaXhwd1lCeFkgYnJhbmQ9QkFGaXhrcTVsRFkgdGVtcGxhdGU9RUFGYTgtZ1ByTlE8L3htcDpDcmVhdG9yVG9vbD4KIDwvcmRmOkRlc2NyaXB0aW9uPgo8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSdyJz8+/YlEbAAAIABJREFUeJztnYe/FsX5t3//wauxV6KxN7CERFExsRsVjcYYNUajUaNRoybEh450kN47CgqKgohUKYJ0ERSQ3kR6kd4O5bw3Z3Czbpm9d5/nnIOT6/rMJ8HnzM7OzM58p9/zf8UAAOAc/1feEQAAgMKDuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIIg7AICDIO4AAA6CuAMAOAjiDgDgIC6L+9Ru3RpfeGHu//0/cR+9+uquTZvKO0YAAGWEs+Le/Z57jKx7ru7pp88dPLi84wUAUBa4Ke4fvPBCQNk9t/6bb8o7dgAApY6D4j65c+c4ZRf3/rPPlncEAQBKHdfEffHYsRZlF9fovPPKO44AAKWOU+K+acmSemeeaRd3ceUdTQCAUscdcd+3fXvzK65IVPbWlSuXd0wBAEodd8S9x733Jiq7uMldupR3TAEASh1HxH3Ia69plL3tddeVd0wBAMoCF8R9Rp8+GmWvX6HC9ytWlHdkAQDKgp+8uK+cOlWj7OLEZ3lHFgCgjPhpi7v0xKU/rlF26d2Xd2QBAMqOn7C479+5s+VVV2mUfWj16uUdWQCAMuUnLO697r9fo+zd7767vGMKAFDW/FTFfViNGhpll679vu3byzuyAABlzU9S3GcNGKBR9npnnsn2GAD43+SnJ+767THLJkwo78gCAJQPEeJ++PDhY7bDu/Xbbxucc45G2af36lXekQUAKDcixP2dv/zl6IT11Ve/9dBDw2rUmNaz59Lx47euWlX28fOzf+fO1pUra5T943//u3yjCgBQvgTFfWyzZhbRrH3yyW1+/eu+jz46ok6dGX36LJ80ace6dWUWV7bHAAAo+ZG4Lxk3Tjmd7Xd1Tz+93fXXS39/1BtvfPnOOyunTSuN20pH1qvH9phUHD58uLyjUHzo4MH8nf0V+3ft2rN1674dO+QfRXv2HNi372BRkTx1+NChskkjwLHJf8V9x/r1GZQ9ztU/++wON9004KmnPm3cePZ773335Zf5aO6cwYMLsj3mo1dflYjl78Iht65cOUM4U7p2HVW/foeqVZVOxi77d+5UZlq9s86SPKlx/PE1Tzih1okn1j7llDqnniotcd0zzpCMkr+KC8RHflk2YYKUhOYVKza77LImF1/c+IILGp1/fsNf/KLhuec2OOecBj//+RsVKtQXJ/4rVHijxMmP8ifx0+i888R/k4suanrppc2vuGJ0w4byS/5lyZ7M0Q0aJIZwJBN+9rOj+XDyySYr6px22pHc8GWIJKpntWomq9sbd+ONxrW74YYj7vrr21apcsRdd51xba699oj79a891/pXvzrqKlf2XKtf/rLVNdeIa3n11UfdVVeJe/PKK41rdsklzS+/vEXFipLzknXNLr/8iLvsMsnJppdcEnbyaY7++9JLxZt4lgflcQlT4iNVr8vtt0ta3v3LXwa//LJ0jCZ17Lhw9GipHWXT5klDu/6bb+YPGybvHVG37tDq1Qe99NJ7f/ubREb+87PWraUXuGb27AN795ZBZATJh/r+snruuVIypWBLcW184YVSYo/mp5eZV1xh8nPnhg3Z3tj5llsCbzziSurIj94berX/7X0feSSfVB8Vd8llKf0FFPdIJ4mUNL//7LPjWrSYM2jQmq++Ktq9OzGK0jAow0/cHrNx8WIpZFK3MydBKvzXH34YDnnpZ5/1+/OfU+Wh1MMty5cvHjNGJEP/lIyQlJ924ahR3e++O1Xqej/wgLTB0vP9vH17KV6Zc0nEVHJj7ddfr5gype+jj9Y47rhs4YjsJtqNkE666MjU7t2lVmSO8JE4H3fcwL///av33+90882ZA5EqOqxmzQmtW0t8xjZr9tYf/6g0j/H+M8+If6nw2d4rjZa8a3LnztN79ZIBtGVpStq2HtWqTe7S5fuVK5UFSYnooOTeR6+8Im2e98WlFPV58EHplIi0RZYTierw2rW/nT699AaaB/fvl4Y8bZaKLo9v2TJx4BjHvCFDpKXPp0BK/+CbTz7JJ+FHxF2yVZqOfOKRj5N2rOudd374j39Iey45ErjAese6dZHFIuz01mN2bd4srYs0nqni2ev3v09sPCS2Y5s2lc5gYmiSKImG96BIfPd77lHGRJRX/4GlBX33hxXyhATef7+/Wyf/XjBiRM/77kuVSyLHn7z+emD8tGXFiqH/+Y/8KVVQ3e66K5UASZs0vFatbIVQWjV/wVv1xRf9n3wyVVMtHZf5w4eH+8Uy0hLVtqddCoyZyTx04IB0errecUeqyIsMLf/888B7pazKcMH+oMjuhoUL9Tkcye4tW6b37i2lN9CE93vssdWzZ/t9bliwQIbycS29NGwT27aVLn+e8QkjHa9U+SljOKnF+c/uiq7O+/hjGfalLY0i61IM8m/tjoi7dP6zVYnSczJU6XHvvYNefll6ARr/GbbHiBZM69lTE7h0sdfNm6cPeeu333b73e/sYcqwNPygDFQ1l0mJ6CybODFVYldOm9bxN7+xhxlXzzctWSLjLeVXsFQJ+ZP04pUF4IMXXsg2gTCuefO0hU26upFBbVu9WkaZykDC8upHdE0G4HHPjqxXL+B/3dy50rYpX710/PjIl0qPVcYiiWVJGuNs/VNpeof861/hcbC0c9JZiXtKxnPNLrssLj7S6ZnUqVNhe/Ej6tTRF4YBTz+9d+vWAr69uGQM3e6GGzRvb1GpUkFk3fB/s/r3T1sZjjXXs1q1bInfvmaNJnzp1qUN+cDevZ1vvTUuQCn90rREPqis0g1/8QuRnlRRkhIj1TguwLcfftjy7OB//lMTq8RR5KqZM7Xf9L77UqXOn8we1arpC4/9Zi5JkSaQlldfnRixratWxem79AbC/pUGNqTdtefG0OrVEwN5729/S9WUSm9dWt/IkU2LihUT90zv3LDB3tWQIcXu77/Xx8dO2ypVBj73nLI86Kc9U/HFW29p3j66QYMCvvT/pCH96JVXzOLbT9Hlsz1GKe5S1DIELhUgrhs+5LXX4p7S99ekekjXLG2sxr/5ZmRoMrK2PFUocReUQ7Eaxx+feZet9CiVMypTu3WzB6UU936PPaaJ2PJJkyRdgWe73HZbpOcP//EPzas1axKaQiWjZE0ShK8GDoybKW10/vnKmTSps3aTrtK7L8jBmh3r10tf6tCBA8qVrZonnLBz48b83xugfMTd/F/Rnj1fvvNOl9tv18Tg2HF5Wo/Rivsf/pAt/PnDhkUGOO/jj+Me6XrnnfrkD1ZXSD89ozq22777zvJIAcV9SteuytRNbNcuQ+oM/f/618Tw333iicRw4r5gwEn3SBmxUW+8EXh26H/+kzkJOZ2Nje1r12rWgWRcZQ9HJNLeBV4wcqQyH4pLpqrs65zSD9DvDYtDZE1yUv4xvmVLZcGb0Lp1ni8NU57i7rF52bJhNWsq1zDL3eVpPUYp7m899FDmV7SvWjUcoFS2OP+pxF3czL5900Zp46JF0j3xB9Lg5z+3P1JAcd+7datyt1Kba69NmzSPFVOm2AN/o0IF/4J2HPOHD9dEdXitWsqI7d+1K7A9dFLHjpE+3/7TnzSvVnZupFInBmWffhSdtZ8izFBNpPTao9Tvz39OG2YAUXYzKpVxgLJOtahUqeBbd44JcfeYM3hw2p0SZezyv1xJK+5//GPmV4QNWMrQ1eI/rbjXPvnkwJ4EDYF1tq533GH3X0BxF95/5hll6tbOmZM2aYbDhw7ZOyjTevTQhLNgxAhNPOOWZCOZ2r27/1n5z0hvvX7/e82rlX3bHevWhWeEwm7NV19FPi75GTng87tFn36qz4SjwR4+nLjSGNg+lzb8Buecs2nJEvOf+p3BSz/7LPNLIzm2xN0go/XRDRs2ufhiZaaUmRvyr3/ln3iluOdzlEB6anVOPdUfWpfbb7f4T7sNLlcyO7l7y5ZUsVoyfrw/hMT51sKK+4rJk5VJk/5mqnT5sUwgNLv88kMHDmgCUYp7qjp5pEj4piPiLNxpxV29d7DDTTclhhY3FTa2adPEZzVnVsIknopP1XAGWD1rVuMLLvD+88t33lEWPM2UXSqORXH3WDBy5DG1YzLyJFFalCM15XJZHDK09If2/rPPWjxnEPdcyX6hVLvZDu7f758b+axVK7v/woq70OqaazQBSs3MfIok0EH2O/vqsR8p9qVRJ9/729+8Z6XaR/opuLgPr107MbRIUZPufOIxtMSZPQv29d64NQkN499800y4G2SUozzNVOvEEwtrQ+WYFnfDzo0bRQhaVKqkiWipOvvWPSWbly3TvOudxx/P5y3SNfOH9mmjRhbP2cRd3Mi6dVPFyj9Endmvn91zwcVdeojKdC0eOzZVujxWTpsWGaCM0/Wn3heOGlUadVISlZj5vR94QPNqvbhr9KV5xYrhB/1NUZyrcfzxcbt7E/nq/fdtBTt0CEBP1zvvDDTk+oMLE9q0yfzeMD8BcfdYNmHCgKeeqn3yycqcKg23J++zBhsWLtS86N38tr4GmpBpPXtaPOezYcmyCSfMJ7mc92DibGnBxX3X5s3SOdKEKcVMnyg/+7ZvjwxwRJpWsJTE/fChQ94B6Vn9+0f6Kbi42zU0LsCdGzYov9TC0aNTZYKHtLX1zz674MHu27Gj5gknbFq61P/j0h9PSFrcm1deWcBl1Z+SuBv2bt06uXPnNtdeq8yvwroZ6sF1HGvnzNG8yD+yy4YMWr3Q5g0ZYvHZ5bbbxK39+usMJw/qnnHGxsWLlVHyb1RIXLcsuLgXl9hy0oRZ59RTpZbqg/UTeeg/1d5ZUZZSqpPeGSXR3EgPfR58UPNqvbjP1VnfC5wakR6Dsvh1vvXWzFbJ4gpYndNOy7wbUkpjo/POC/woMdSbWingVW4/PXH3WDVz5ocvvqjZS1tA1+13v8sz2qtnzdK8SIaleb7Iv9Ng5dSpFp9SQ6S9LFYv5QVcq1/+UlkZ/KuaiYddS0Pcl6j7UImzRnGEjavIOD1VCDKmKaU66c3mf/3BB5EeCi7ukzp21ARYtGeP/6kJbdroi9+o+vXT5oMhzvyL5bhfIh+98krkCRWJpDI5/Z98MvPbA/yExd1QtHv3jD59Ov32t/rSkKfL8yzZt9Ona94y8Lnn8swZv3ULe+e68y23fPH22+bfY5o0yZAnyq3BIuj/FYik9qA0xF3GvErDk93vuUcfrJ/wAkbc6mUci8eMKaU6uWvTJvPsnMGDIz2IMGlerRf3QS+9lBhai0qVAk8N+de/UhU/KerKnUh+DuzdW+ukkwJB1fzZzwKTKqmQ0jW6YcPw75uWLFGm5ciyquIwhIafvLh7bFiwYGj16m/ojJ3m4/I5xCgs//xzzVs+eOGFPDNE9NoLzd4gdbr5Zm+6SeTvrYceypAtmiN2Mj41Z/RrHH98oufSEPfieFsIYZftJHrAfJvIx95t21KFUHriLhjrFHPLStw1yznhom6/mi3Syegz0lqOnfCemU9efz1tIB5moSuuQOqtOk9s2zZzHPy4I+4eXw0cmNakeCrX/sYb84mecmZAujx55oN/DuTAvn0WnzLu8a+4ihi9eeWVabNF9FpzCsOs6UkbnOizlMR9x7p1SiMw41u2TBWyoce99/oDyXAYzb+tpeB18t0nnsjF99yV7bpS3KUgaQ4Gr541K/Cgchk24Oqfffb03r1TbWMNjFMbnntuPtYZp3brloufb1Sag82VLKtmjoMfB8XdsGXFipF16zY6//wMpSTRbVm+PHPElMtlIm155oB3y1WdU0+1++z4m98E7BSunz8/w2KG1A27uRjBHA6U/mNi/EtJ3IvVh+xbXXNN2pCLQ1Z04valWFBePJmtTkrgw2vVWvv115F/Lay4G7Gzu/efeSb84Lp58zLXzdaVKy8YMUKZG4F9LGkn0AJIQy5VIO6ve7ZuDc8Cxbm05rUjcVbcPaTyKwebemffNp4YH80r8lnVMRw+fNjsJ/Ofl4ukQ9Wq4bs4lLcMBlyHm26yjxKMqZB211+fGP/SE3flKaFcVKcyEf85oJonnJChJ1iq4m6ngOIuPejEW4HaV60alz8W49Ua1/XOO+3G7g3+4+JSC/K5DvBgUZH0h+TrW/y88/jjyvjnv1mu+H9B3A3SjbVbc07lNB3POJSbw4ZWr55/qs0lcIk90PY33hh5XjTVhQOes08oGbuDdnMIhtITd9EdpXGLDPex+DecSEuW9vFi9cRdZJ3ctnq1fMoe1aqJOMqH2LhoUapXS99T82qNuCcaDxAdtCyqK6uJ3YnEJ04VmuOjNY4/PoO5JD/S184l2S3Q70YryLLq/4q4Kxep9C7RVGkcXw0cqAl/WI0a+afaLGdJq2b31rZKlU8bNw7/LiKY6g4Kz1mGtzIiMRU7MfKlJ+6CjL00gVtuOInD3/mNs89lR3nmJVAnD+zdK2UmcGRfBm2pTrQXStxFUu0mw+Tj2ve3ZF7YD7uud9xhmeUw84QZWvEAI+vWzcUfIDBIkvW3t6e62DKS/wlx37RkScG3w2e2PqE0JDS8du38E27O7PS49167t5ZXXRV3hFK6D5b7yeJcrZNOipvQGN2wYU5nXKFUxX3rqlXKG7TnDxuWKmT/VsjEFYhIMoj7hoUL4y4vTbVh/+2HH9a82i7u0j+1rKNKb1o52bVn69Y87x/3u+733LNiypTwW9594on6FSrkfweTuZdj1Rdf2L35D2nbneamLTvui7sUEc0doWldw1/8Ilt8lDmej3ULj49efVWC6vvoo3ZvTS66yNJWrZk9O4PJh6aXXho5rjQGXgb+/e+JkS9VcS9WG8lKa93bM08mXcJsEVPerezVyc3LllkuXk800OYnf3Gf1KlT3GYkGUGm/VgbFy3Sn+3UuF733x+4tvf7FSv0R6zj8DYvJI6TlAfUjdMsG1hwX9y73HZbAQuH3y2JuSPYzozevcssxyWQXJJJSEF6Lvb7lfRmS/1ORgzhfWkm+RrjyaUt7vOGDNGEX+vEE1MZFPKsPmRedV82YYK+hMjgQNpRizdz9liJch9RpLhL5zdyVkd6BtKWZ1iaNmxbvbp15coFrLbmeu60hw/smApS9/TTNZ6Vd+/l8rBxZHBc3D988cUCFouA++D55zNEabpO3CMnwdNiDn9L/93uTfQrsQEwc+Vp3Yg6dQLhzBk0KKcbl5S2uB8sKlJOgNrNrvmRxsyb7UkcocdhluY0dfLw4cOJfZfZ772nf3VmcZcGKXwTd/sbb5zStWv+Mx77tm//4IUXClt5G557rncqO3/6P/mkhNm2ShWNZ6VJhlzJ9GbaWxP8uCzumm22+ThlQx1AeZZhbLNm+efArP79c0n3sR06cCCnuBtEpDCb8cjAeRljOGVcixaJkS9tcRdGlCyCJbrOt96qDHDnxo3mkQbnnJN5X51e3L27YZtdfrk04cNq1gx3clPlj/L6BL+4SzJH1a/vX8CQgaB0jdfNnZst+XEsGDnSMvuUzfV77LH87bxKi24OxifOfxqkkCiP0Yn7vEOHzBFzVtyVY1spLtK1yVw47NYWI5nWo4cm5PFvvpl/JnwzdGguaX5Axqc5nUG0HevXZ6hd0gRuWLDAC2Tl1Kny46ROnRJfVwbirrStL058agJcP3++8R95NkeJ0kCFvELyVkZd0hP0tvSI1AZuLk11EV1acd+7dat/6aLdDTeIoASsgBUQGQQMeOqpzLU10jW99FK7Wb1EPCP++ju8lLuScllP0hncFPfvV6yod+aZiamqfcop5qieGVVlcBnu0rVc1uN3BRF3c5D9M6vVlx3r1uXUq39SjgP3XGtcy6uv9my6mgUlzVHAMhD3YvUVl8oJdK/T/dXAgZmjtHzSJGXGSh/52xkzwiFIh9Tzk2plSPqemvcacd+0ZIlnpkIGNysmT86c5FRIj6qwJ8+lH53PvsNRb7xhwgkc87YnQR89KQ/ZIuaguIuOtLzqKk2qvF1uu7dsyWDK/GhBT2n6WTlZlM2wSYAVU6Yklrkty5fnYm7DiUQ58gg46RKaWwjM6zQXFpaNuCuPHTS/4grNLQrGYH2N447LZ6pUKe51zzgj7rDF1lWrvIH/4jFj9K/Wi/vGRYuMwraoVEnyUEY20vBLfKS3lM3gWipkxDDo5ZezVdg4p7F8F4l33bbe1MTB/fv1Jg4HPP10tog5KO7KvtiYJk38T83o0ydbmUhr+FuZ46l2sMWx5quvcknd5HVz5+Z0lrw8Pnj++QwZZcYiZlZaY/2jbMT9wL59/ltNLE7TMzWT+J1uvjmfKCnv8rbfcehd7bZg5Ej9q/1dfov77ssvvb5zw1/8InxiQIpTz2rVpvfuHbiFo7BI3yVud382l2GC22/A4JuhQ/UP6ncoHFlWzbQoXariLoW82113hX8vRXH/5PXXNemJvA1Vb5PT73pUq5YqhtJp1QRrn0tRsmHBglzSFIGM680b9UcxD+zd275q1bQZJRIgvch9O3bIv5cq5grKRtyL1WXmwxdfTAzK7DYJ9BvSYsZbedZJbz91qvxRiru+11nntNMknvr7Y9MiXeCxTZvqDXIlurRby/2XFWtKtYc0kPpYTerYMV2+lFB64m6uk5QGPvyn0hL3WQMGaBLT7vrrI9d89Ab1Ay7V9R3KGzIzDxL9mBpur97ekZnta9fqQ5ahd4NzzkmbUSIKq774QlmFykzcTROY6OqddVaiSJkTTJk3QRqUPffEOtmi5FqSuR99pH+1UtxzJWZph1av/u4TT2g2frSoVCmfzTO7Nm0a16KFZVvL5mXLCmUcsPkVV6SaaPWbEkprkkS/f18GKKlCNpSeuJvhftmJu9mGkegannvujnXr4gJRmhwJOM3eDw9l1S3InLu50m/JuHEWP54xozUpDScl2g+JdGY9NvIgeIAyE/ditQ1C+1LBoQMHJHXSgOVjXLBYPeeeWCfNiCTuRr1I+v35z5pXi6Z7x9M2LFyoOQFe78wzM98Oaq5zSrSCKyVZudhmd3qbfft37fIf3g6cfU1EOnD6WGmqTIDSE3cjGmUk7tu++66+bqgooyF7UBlsFSRa5vJj5sETXZ5De4O50i9yQ4WHN00kQ4q04U9s2zZb/ZGIJQZeluI+s18/zbukm2YJZNPSpblC3IGp3AqZWCfNXqlUa0JKcQ9MAcvQR7MfQfR9S5qLwg1SYc2cvuZuemlfp/fqled2+Dqnnqrc/G62Gntu+5o1qZImY2V99yjDpcqlJ+5mV0hZiLsMo5QDnLgLaPwoq1bA6a/vMNtFEp3ddqgSkxb79WPebXxSKzK8wtzsk9bZ2xtDWYp70e7dmr2zUhV3btgQF8j84cNzedys7aE/xGQPx5xgSGWZUmlwfN+OHYEHlQYqOlStenD/fn18RKzbVqlinrWfxfMjX1OG4BkMInlOOSkqgut/ashrr0kkUzn93KYkJ+2yaumJuzEG3ui888J/KrC4m/sfEl2c4cMwGc466w+UHti7V2OPsCBWIc12WvtMsXcYOmwqQIOMTBPvZAg7zexkWYp7ccm99ZrXWTZUfNaqVS7l0kUkqWzL2JFOT2BlfvWsWdLtirsDWinuYcMshw8dUm5c+SSX02eFMTNn3Nt/+pP+weKSwy5KO2hhJ/mWGL60UoHxilSEdtdfn8q1vPpqfaxSTf8Wl6a4my2zeYn7qPr1zevrnnHGGxUqSFhNL7mkecWKra65ps2117avWrXTzTe3v/FGTQL6/OEP+qjLoKzhueemKg3hG9wtaIzoZjYp7Gdy5871zz7b7se7jDjDgSzD5mXL5C2psktjRqqMxV05XWa5Q6rvI49Iscw/JmmtQlp4/9lnA0NAs0Uybgj7TomN6ETpOBJqAAAgAElEQVQXOWuhvyNUeSJ0x7p1UvG9p7ItKs7s2zfbXprEK7TCOyMsi3lxSAuh3Imb0zU5fkpP3M1MSaRlXJW4Z7vmLdK1vOqqtEeNMlzRK+qgDFxzA0b4SvgMyLgv8fiyDBFySbKViP7iuqN5pVi8LWNxF5T7O+M2fjS+8EL91IGFbJd1RDKxbduAAU6zn2dufuIeeURLFF95etm+dOERmPSocfzx2Uw5mumytG7x2LH2YL2TBJ7LZjo4lUm+VJYSSkncDx08aO7vjLwwNlncU20Ctbv6FSp8n34ZR+h2112pXqSv2MbMut0lWvLS8O4TTySG42lo7ZNPtl+OYyfxWjW/0zSEZS/u/j3LFhdpQmTb6tW5rFagA+RzzV6AVTNn+k3+mu3Jufie+7s6cY+zWt7zvvuUBSBxZ2Tk5jeR6cQkRyItXFrdsK/fFu3eHb7/J9vtbGZLm9IlWm/1U0ri7m0dljFH+K8J4r7tu+/SzopYXGarQNIkpHqR/voOjc3PrnfckS3aftrdcEOijRq/XZ318+dnfteRe9HU5pDWzpmTGGDZi/u+HTvMjZp21+j888N26ucNGVL7lFPsl4MrKb0Lsr0Jn7j9kUpx37F+feTjE9q0URaAREvlnW+5JfxUqvl6P3u3bk1rX2S6VdwjrVakOgzsR7/hXXpgejOWpSTu3tayyGPtNnEv2rOngLb5Z/TpkyreAT5LsxE1p9iKa9AcQUw7vxZGxrBHDoUmjS573Huv99JUtr8j36jcaKw50lL24l6sXktfOHp04MERder0fuCBgsTBbGEseJ0UxjRpYp6Nu+pTufcpbtFYuq7KmnJk31H80T+zhTfslAbTIwkYy0x0diP+PaNmVqd07Zotbqk2vOtvXyklcfcqZv204p55gTvs9IcRLLT+1a/0bxz00kuaMA8fOiTdfHtQiQuhiZh58MTtU22vu8576UevvJLnS2XIprmudv033yQGVS7i7hljsDvp4QYe7HbXXWk3M8ShvMw9g7h7ezPiTFwpxX3b6tWRj8vARW+p3LJH02K8KPNmJOUhR89ZZtjiLEVnvtQ+1YZ3USRlsKUk7p5iRGpUrLivmzevUMY8u9x2W6oYx2GOyyudXpE1V0TFDX6VDK9Vq82vf53ozX/iIx/j0R5zFSvhmvmfchF3QbOzs9ZJJ/mPIx4sKpImbeOiRQWJgLnPpOB10t+tjtuMr7R9bbH7qO8MWSYeLRcHZj65vX/nzlQCYlm8jRsEKBeKI1Hu5zZu5bRpmjBLQ9y/X7nSe7DeWWeFPSTMuc8ZPFhp2dHi8snoAKlWYzwzwnY0FmYyH9cuLpkBF6VOtDckY4jADodt332X+aUeiTcc+a/viKO8xF2GvZr3tq1Sxav/swYMaHrJJYWKwMLRowteJ4t/XIzjDIUqxV1qeNxblDvljxa2qBHArs2bLY80r1hRY3s5zKEDBzTnS45+3OuuiwtHPnrc9P0RyxOZ4laccnvewOee04RZGuL+eYcO3oN1zzgj7EG1FXLj4sVDq1fPbGY98sXZkDZfedlmrsTshiZMGcAmHonU2/4PI5KnOdIWXjTO59YCj0MHD9q3e2o6ueUl7nu2blUebqxfocLIunVH1qtX57TTNDYjlShNy6WqkzK28B+GjFstVIq7xYqAt7NW4yKnj3dt2mR/KpXxRY+t336rj5jFSva45s0tD6Y1L+NRtGePf1O/3dU+5ZTEbfjFpSPu/jt7pdiHPaQ4oSppntGnj2cOP5XLtu00knkff6zN95NPVu6plwGmPah8Fug63Xyz5qa38AyA8kqmRHZv2dLs8svz+TTlJe7CgKefTlvYUhlftKM8NJCqTgZOjcTNd/f/6181r7ZcOqg/yiROBujhEKTfY5e5Hvfeq0+4h9KoQ67k6s04GwkyqrDbsMpmm9eQ6mC8pudXcHEPHPQTrQv7yWJ+YNUXX7z/7LOp7EXM7Ns3w4vi0O/hlUG6JkApQOZESZyrdeKJ2U5tSNdGRqCag0KRUxBpTVrHIUUh7nttWrIk8fFyFPe09oWOnK/J+55lD89Op93pzUXIQCpQ0uJ2XCjF3fL5Uq1bSr5FnodKnAjN8NH10jln0KC4QIx9Sotrf+ONaSPmob9eMVdi6iAxwIKLe+CirponnBD2k922zO7vv5/Ytq0xVJ3olHtXlGxbvVqzDySXpsedeNA8w+aqratWNTr//E9ef13jOXIYHnnBSja+fPfdyHRp7psuR3EXUhmP7XzrrQV8tfJE5UevvqoMMNybjrNcpLx+2jKrtn/XrlSGoCMniHasW9f0kkssTzWvWDHVkYKdGzcqjRBYttKbPlNiCJozHJEcPnzYMtgNu0TTqoUVd2PDPeDC+1kLYDhMY2xW07ilQoZCynyPO8IXJnyI2e/qnXVWqr1f+7Zvb3PttR1uuqlo9+5Ez4cPHYqza1HAQU9kL+zYF3f9eRxxY5s2LeCr5w8bpnmpcnVn09Kl4U5Jz5jrw5Tibl8PN9dRKV3cNOC6efPsEyAf/uMfmuQXl4imMkpvP/xw3CFt6dspF97ymU0d3bChPusG/v3v9tAKKO5xl6+Fj9EUxipk1zvvTIx32DZpnijtlOntrEoHxH+ZS9j1uv9+jVIXl5zs7X733W9eeaXFLK0fy1mq2qecojG5ruFgUVGX228PhK+xkFy+4i5dEqWllFzeVy8FkBRpXmrZ0eEh/ejI9SpJ2q7Nm8P+lYsN9mMKqaYXcj5Dm0V79kxo3dobFny/cmUHq7UfaYA1+alRTOmSj6hTJ+6WlY2LF1t2Z4ad5orgSOJ20MdVUvtkYAHFfeBzz0U+G54dKYy4y7eX5NnjnXg+My3r58/X5Feqcbrou30ur/WvfmVfhZdaIZ3HOqeeKuKuN/ocecrOczKMndajhz4VFnasX9/4wgv9gSde2iCPdPvd7zRZPbJevVQmwvUojQDnf/WSHykMkiJl9bYf9N2zdavlWuCJ7doF/EuF6vTb32reO6VrV7sZoqHVqyuTYJzEUwYiTS6+WAYZ/l6FfFmRe4vN0XEtWlh2H8rjmn3M0vmwLFCtnj07rTUUGXDrzQj6kXYxUdP8TnQjrr7LIH7Qyy9rApGKZomSZK93sDkipWeeGbgDvWD23D9v394e708bNy7UuzyMofpEF3eKL475w4db7C7UOvHEvo8+Onfw4N1btnilWdrtFZMnS8Mr3QqpAJM7d9Zb/lIa3exRrVpBGkipscaSnHEWU25Sl95/5hm/50TX+IILPmvVqoBLmgaRBs31e4mjYyXyZcc1b67fdJsrucg07jjY4jFj7LbC5UVmRCgt08LRo9966CH9NnBxIsTjW7aM7P4XlyzhaqzjBZwM/CMNzUsrJTnTPGalrfcDD4QXeKWOSA7Yx9nSfen/5JOWEer+nTuP9JkU5obCTtqDb4YO1X77km34o954I9UnME6aw+G1avmtDcu4SvolygVC4ySEyDUMae8T+1iBOclCXtZh3yXZ8777Cvgug3STpWQn5le2o3TLJkzo99hjdmmTEtDgnHO8Mic1XHo3kbsO4vji7bdTrXqJTMgQOO1FMAH8y3rhy6FEYuZ+9FHXO+7IUJG8Uv5JLleQQ1geIiv2s8QdqlZNdT16JDIYl9qYqsvmd1L9pvfuLZ0D6ffJ/0plU2bjyDp1pORkuFfSc7VPPvmDF16IW0FZ9OmnSivKUoYndex4sKjIkkui18s///zTRo2kwxHeKykSL0VUitAXb701vHbtuH6SFHv508DnnpN+kmXLspRGGZ0k2ghJdN3vuWdqt26Jvfgty5d3uOmmfF4kDZUUoem9eqW1Zeu5+hUqyChHsmXJuHErpkyZ2bfvkNde02y9Fz/+SldIcZdmyvbi008v4Ls8NAfEP3j++czhSyu6cto0GTi/8/jjIh/SZ/FGpm9UqCBS2+W22wY89dTU7t2zXSpvn8qMc/broTUMfvllaZbEhSV4+5o1eVYk4wb/8595RjKMVM4Rdeu2rVLFHKkTRWtRseKAp58WKSnIhEyqU50FdDXT328e6T6zXkq3cfFiEUppd2XoKV0xGTGIaDY6/3xpVPr84Q+j6tcXNUl7sFNGBmvnzJnWo8egl17q+8gj0piJZEvI3jKJVPzGF14oNUWKujQGIlsz+vRZPWuW/VYyj33bt5uCWhCXeIWLdJwL8iHe0N0jXXDnN0Rc4Gv2pDGPe6tUwsK+y8O+r0ByOWwVNk8kwIKHeewgKikjg73btkl/SsZGUgkP7t8vXTkZrkqq5a+m/h82HDp0JDcOHBAP0hCK//27dkmFlI62/KNU41kan2Dfjh0y8Drqvv9enCTEuL2e27ZNnKTxqNuxQ5zkVYTbtSvodu40/s2zR4LaulXesmvzZm2ey7+9PN+/P5Dn8u+C50lminbvLuASSNkgcTaf/r8f3Xxr7xPv2iV+zDeSzBcX/FIlH+vIZ/1xQfpRmJFlyRQMZVkq+TFckPwFoMDiLsiwLqywMs4t4CHVAJJ9caYRahx3XMF36QAAHPsUXtwjbTemWtDIQNxOo0JZBwQA+GlReHEXPsnl/Ao7umHD0nhLgPBWs7hrEAAAnKdUxL1ozx7v8G6h7sRJZNOSJX5l158IBwBwj1IR9+IfjsY1r1hRaZexIHzauLFR9k6//W2ZvRQA4BiktMRd+OT110tvETWOVtdcUxrbYwAAflqUoriXCyumTGF7DACAa+IOAADFiDsAgJMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiPsRDh04YG48UPrft337qpkzF44evXLatLRXu21asmTZhAmLx4xZO2dO5GWJAQ4fPnxw/36JW+Td0xLC6tmzJSZLx4+XkMN2F/YGLgeIceEbXw8fOiSB79+503LfwqalS5dNnLjo00/Xfv114sU629eskYQvHDXq2xkz9mS6ZHXHunXLP/98wciRku2ZLxq0pOtgUdGR3+OvIjryLYqKinbvNrfQSZI1eRs2ryS5LR/UXLAQcOFslJdKhI9cyGBC05XStGmxIG+3hJO5gMkvkli77anta9eumDJFivfqWbM0CT9SkZNSZCp74q0mppwkvrHYl5PKu6XKjP9dcW91zTW1Tzml5s9+5hmSbFulSuJTUsh6P/CAd4WYcZ1vuUUUx/6gFOJPGzVqeskl/gfl7Z1uvnlcixaBi0xFqeuefnqtk07yX686pWtXvx9Rt/Ddu3VOO63HvfdO6tTJ86a8nUsEurjE8pqEELg2dv0330SkpXHjppdeGkzLb387rnnz71euDPhfMGKE5G3gjW9eeeWHL764YcGCxDwvLrlMMXxDr3zBof/5j+Yybku6pAIfyWrfnwL5LMhXCxSVaT17FvsM1dmdZ8ZO/Es49puXR9StazybiAVK2tGrb04+ufOtt87s2zegufmkJZLxLVuaCHzzySdxflIVMCmcdU491Z+oBj//eWSwX3/4YeBObUl1v8cei7yFvPs998hfPZ/9/vzngIf+f/1r4L3vPvFEXIpEps2Vre2uvz7Oz/crVtQ94wx5qb+GSmmM818u/O+K+8S2baWome8txb3X739vKeWGCW3aeB+y+RVXdLjpJv+NxoP/+c+4Tu66efO8i7zrnXWWlFopN00uusj/rN+/aL380uqXvzR/FRkd+Nxz/rt9pefb8uqrjxb6U05pXblyi0qVpDEwvzS+8ELPp/ml0XnnyevESRHPlVxQZf5TnNEaU/ekXyzVoNH555unJJJDq1cP9JGldnmyLmkRzRXhbnzBBV5aRLL9/qd27+79SSLW5tprJTLeLzN69078UnMHD/b8N7vsso6/+Y3kjCdhGuN0lnTJWEf0tMttt3mvqF+hwq7Nm/2PS+vb/e67jSA2u/zyD55/XkZdxT+Iu+S/yUkv/Ppnn21+MdfteuJ+NBo/JF8yzfsK4syt3J64ByImH854q3fmmX4V8+t7PmmJRAqVCeedxx+P85OqgH3x1lt9HnzQ+JE4SEzCl9dLEyXpyv3QY5Bv3aFqVe+CbPnly3ffDTziD9Y46R75PcwZPLjvI4+Y+9okT6SRmPfxx3EpmjVggBdOZFsiyKjrk9df9+4cl+hJa7Hkxy8td/53xd3Q+le/km8jKp/oc3qvXuZD9rr//k1Llni/i7j0qFbN/GnUG2+EH5SebP2S23IbnHPO1x984B+f7li/3ly1LgUl/KCMEkywUtoCfxryr3+ZP0lP2Rs8yj8+/ve/cyWWlj2fpj54g98BTz8d6C7JsMOrewZp9kzg21avDrx366pV5uZfSZHEyj/+lT9JsPIniZv3owyrjQpLPvtFRDo+pqs1q3//cMIDtKhY0Sjmt9Onez/KsNpUeHlvYgiJ6RKkax/XPvmjIS2N94sRd0+ONy9blvtxf3nx2LG5kAHqz1q1Mt7k6/t/N/cPe6EFIvbhP/7h/SLNvDcSiszADGkJs3LqVC8Q+Vj7tm+P9JahgPX5wx9y8Zcq93/ySfPSYTVqeB0LacNEOpuXRFvcknHjwg+aYI2TJiE8OSN5eKR8vvaaJdWCV53FjaxXz+JTGk6vGtrDLBcQd5W4b/vuO9Ox6nbXXeHZw4P790sFPtJhOf74cEdSHpE/Sbd67ddfh0Me26zZkTIUqtLFVnE3vX4pzcFHZs82Jdv7JSAu4bonxVcv7pJRRyrzCSesmjkzHOG3H35Y/jq8Vi3vlxl9+pigJC0Bz2899JD8PmfQoHA4fnZv2RLXcBoV2LVpkz0ETbqKfxBE0y+WzmY4wnHi7mVdWNz379oleaUUd2m6lOJeXNJjMBMCkX3qDGkJM+jll4+UsQcfNLH94u23I71lKGAWcZ/70UeWfpI05CZRMnYMLy+ZYL2Rzeft2wc8aMR9+5o1kmPy1YzEy0jRst6AuB/TKMV9RJ065iuumT070sOyCROMBxnv+3/3uj/DataMfPC7L7+U0eJnrVuH/2QRdzObFFmxJS3++USpwKt9cQ7XPWm3xM/ODRu8X+JE0LsdN656mAdHN2jg/TL+zTdzMcNbGSlL93PZxImRQXns3LjRhDCpY8fAn4p275baZal7kdGzi7soQu6HifJAyGFB3LBggfyntzQXFndh8ZgxUjb84cSJu7xOkiOJioxYQNwFMy8nGlSQtASQUaCZU5JC2ObXv5Z/dL/77kifGQqYRdw7/uY38qeG554btzhpxjfiwvMqJlipqmaSUFTe/9JinbibryNBec3M8kmT4jwj7sc0SnE348EWlSrFeTh86FCDc84RPy2vusr/u5Sko+oWWpZMxCLuZmFWJD4gHImE616YOBGUdsvewh3ZYLB3r39kI90984j00zPvJWhdubKE0PWOOyz7djRoxH3FlCkfvvii8TazXz+/h0RBjBT3MHHiHkecuJtJsIF//3tppEVGVLmSRe/iHwaX0p+VXm1ibDUFLE7c5bvk4qeSDOvmzTN+ZGARGazo7Oz33jN+Bj73nN+DRtxNYZMQpM02uxXCL/JA3I9pNOIu7b/5hO/+5S8Wb93vucd4898WYuZG655xhr6D6WERdxm0mj/J2FwKn77lyEfc211/fa5kZU8vstLvNnP0ptn78t13wz3TRGTEYKpZ30cfXfv115FbQjUoxV1qrIlzo/PO8080H1PiPqlTJxNIZHzyT4uZjZFucnHJqpJ514Q2bRJjm4+4f/3hh+ZF03r0iHtWug5mFaf9jTdGBmt0tuudd5qg/Os0ieIuw2hTws0SgoyAcyXLS3FFDnE/ptGIuyeykcueHt5C0JYVK7wfzQygDGwzxM0i7lLEvbbEOCnr03v3TpTOfMTdbDZodc01qVKxcNQo/zY1aeekX2bZoRGJ6Ev3u+/2pzfsIiVbky6DJ4jybxGXo188l/M8FFzcm1x8cbPLLvPcBy+8EOnfRKz3Aw8sGT9+4ejR8pXNckXOrABF3SiZZ1qkN2O202xctMj80ubaa+U/2153nSVdhnzE3ftAlp2XgtmVJIPXyGCNzkoH3yShfdWqXl8kUdzNONub1Zw3ZEguZgrIgLgf02jEfen48TnF0rkMkI23DQsXml+k4plfOt18c9i/aMGiTz+dP3y4lCHps4iCB8q0RdxN4J+3b2/mgjwn3bSp3btbIplZ3L20dKha1fJsJKIRPe+7L6DFPatV0290mdG7t1nQzpXs3BDxEue1Gc0uv1wyP/F6Rb24ixyYXW4iEN5O/IKLe8CFl8f9EQs4idigl16KS3KeaTGT9f5d3mZmJqeYXcxH3Ec3aGDesnjsWMvj8rlzJbsPI4P1dFa6Yia06T9st7WL+8GiIjPT5VVDb2YmvHHegLgf02jE3VsUtR9SeOfxx403/zKO6T5EHo8aUbduoMYGvNnF3SDlT4Svy+23+8MJ7x32yKfnbtIiOWZ51oL01j969VV/a9T00ksDS16ReDvlB7388pbly73fpWk0v3sdTDt6cS/2rR7LCMn8UnBxF6kVdfBc3F5DEzHJ9qHVq/d99FEzKdHkoosCG9gLmBbpoctfJ/gW+b2ZmfBmngD5iPu4Fi2O9tyHDrU8bopQeAQZEHfJT9PHF//mRLRd3KV7nivZceufhDHD8VonnRR5Vg5xP6bRiLv0xM0nfMc65276R/XOOss/Jd3w3HNN8Qr7371li/TZe/6wqXZyly6BbZQacf9vJBcs8FoX6dLGGUXIR9xNWqT0Z1g/8Diwb98Xb79tuki5H88VRCK9e3M45aNXXgn8qVTFXfjghRdyvnntY2TOfc3s2WbI8v6zz9ofyZYWaYO90i466Dkzcmp6ySX2r5+PuHszSJbRpwxWjJ+3/vjHyGD9Ojurf3/j2Qi6Xdz7PvJIrmTvoz/VZh+zuBl9+oQfQdyPaTTifujAAVOyLbtl9u/aZarc2w8/7P/dbAwXJzU/8kGjODWOPz78p1TibpCusXlk8ZgxkR7yEXcvLRl2/gSQDnjdM87IxUxY/Sgy7dqZl4bncP4r7opDqsXpxV2qrjl9JiOMot27jxFxF0Y3bGhCWDd3ruWRbGmR5tYbWkW65Z9/boltPuLuDZEtu2W8OdLPO3SIDDags13vuMPUL8kri7hLTyvS0oPnuv3ud+GnEPdjmjhxf/+ZZ/wy7U0ZRx5EKvad1gmMKMe3bJmzjmcziPv+nTvlRxmehxfxV0yebB5ZOGpU5OvyEXcvLf4zqHaG1awp/sc0aRL+k1kQ7nDTTfYQzBEYcWFbY16/bPvatZrIpBX3Yt+MkOhpGYj7nMGDF4wYERkxv7jv3bbNLG7HzQVnTov0Y4x1BJHXmf36+d3Ubt0Slbc4P3E/sHev2YAgcYgz2mXCr3XSSeHcixR30XRz2ktU3iLu8slyJSPsQKrFeWPrbd99F3gqTtx3f/+9dPnNXqNyBHGPEPeDRUXSjPsLqHeiQXyG9yfIVzdVov2NNwa2Ce7cuNGYfBEt9u/K8sgs7pEtjTdrGbd1JB9x99JS47jjIg2lScRk6OCtJxf/IO5v/+lPAZ97t241kzyDXnrJEpNi31B9/vDhgT998PzzuZI1ZOXWzAzifmQ1ssR8lQzLzKGe0hN3KXWSvV1uuy0yYoGtkN6punXz5hUwLfJZzffdsW5dOFhjKkOetZhLzEfci312NSI7BN5YLXLfWqS4F/vOZ5gp+Ehx71Aypxqe+isu2e5lHg+fNIwT92UTJ1qa3jIDcY8Q9/XffBMooIcPH/YsTrz10EOebRmpkPOGDDFHiqTTETk/MKljR/OgVLmJ7dr5e6AbFy0a8NRTmcV9eO3ank0P6c2JshsjTRYzT/mIuz8tNX/2s2E1aoiOi2SIk39I+TaVx78yYcRdfvfvfVw5bZpRGUl13EjIY+uqVWYht8nFF3sntqSD6cVEb4ovg7gL386YkfMNz0tP3CUr5EeluHtGeyLXgTKnRUILVwcPb4pMynxc6vIUd5FLz7DayLp1d2/ZYn6X4i1vN7Oj7a6/PvJAXJy4y7N+W3VhcfcW1cI5VlxSx81ZgTbXXhuObaS4m3EA4l5uyOBUmmszZJP/Nbvr/HvsAgVUypk5G21c4wsuaFGpkmeIrslFF1l0yjtzZN7V7LLL5Fkz6Wyc9Ib8/kUm+v/1r54hSRkt9n3kkVVffGH+6ol77gfzexKgZ3q0bZUq4X0URXv2SJnudPPNnuXIVr/85Xt/+1tg0nbxmDF9HnzQDPlzJQbIBj73XMB4i7dfzUuO3+qp6IJfs4y4G1f39NMl1V7gEvPpvXppvpS3D8+0oCIKnknIdjfcELfJRJkuGYcN/uc/zQl70w7JOCMwLjFDBIu4y6ii76OPevac5UWSD+E9S0ej8YPxEyk84VLniXsgYqJr3e++228Q0dt6K7+b5b580jK2aVMpHuZTSgx7VqsmbaH31yXjx0uPwUugFFdRUv/Un7KATerUSRJoPp8UAGnjw1aVVs+ebUZ1RyvL5ZeL82wUd73jjrApf3+wUq2633NPwLCM5FukuEudlfbMM+fZunLl95991tswKl066fV3vvVWr7y1ve46yWGRe+miSU56VjPFg/9Tmul7xL3c8FvcjXTh3oeMRqXQtLzqKr+35ldc8WmjRvY7B4pLFove+uMf/VZJTZnofMstE1q39nooBm/46Xdef1DqsDxypMz9UJG8BkaqaOQtBF4XI+ACY4Lw7sxc1PLpt9Onv/3ww/60SN3red994ZkTqagio4Gslhrb6/e/l16kPcf8fPnOO4FslwZPdEF53tWSLukDhv8UGA1IM2DmMeLE3TMy4XfhnmlkNALOE/fIiPn1Yv38+d7vve6/P8+0SP8g8KB/z6u/d+I5v7kkZQEz9vXstay4ZALw43//2zPza1yHm26a2a9f5F6dcLCBXcXylLdd2C/uEmA4zl62yAAxMlFS2b1RmsUh7j9JdqxbJ7K1aubM8BqLnYP7929cvHjltGmijwhZztMAAATESURBVJuWLs18kv5oaEVFEtqKyZOl5QhfkVHamLRIQkQlE9s2qfzfffnlsokT18yencECgWH72rUyfJE3blm+PJ/tmPCTQD7xlhUr5ItL/zrQ+wENiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAgiDsAgIMg7gAADoK4AwA4COIOAOAg/x/x1RtvBkK+NQAAAABJRU5ErkJggg==";

function esc(s){
  if(!s) return "";
  return s.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\n/g,"<br>");
}

function fmtDate(d){
  if(!d) return "";
  const parts = d.split("-"); // yyyy-mm-dd
  if(parts.length!==3) return d;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

function qrDataUri(text){
  try{
    if(typeof qrcode === "undefined" || !text) return "";
    const qr = qrcode(0, "M");
    qr.addData(text);
    qr.make();
    return qr.createDataURL(5, 2);
  }catch(e){
    return "";
  }
}

function trackingUrl(shipmentId){
  if(!shipmentId) return "";
  const origin = (typeof window !== "undefined" && window.location) ? window.location.origin : "";
  return `${origin}/track.html?id=${shipmentId}`;
}

function billHTML(v){
  const qrSrc = qrDataUri(trackingUrl(v.id));
  return `
  <div class="bill">
    <table class="bill-table">
      <tr>
        <td class="head-logo" style="width:30%;" rowspan="3">
          <img src="${LOGO_DATA_URI}" alt="Universal Logistics & International">
          <div class="logo-sub">INT'L COURIER &amp; CARGO</div>
        </td>
        <td class="lbl" style="width:8%;">Date</td>
        <td class="val" style="width:14%;">${esc(fmtDate(v.date))}</td>
        <td class="lbl" style="width:8%;">Time</td>
        <td class="val" style="width:12%;" colspan="2">${esc(v.time)}</td>
        <td rowspan="3" style="width:28%;" class="awb-box">
          <div class="awb-title">AIRWAY BILL</div>
          <div class="barcode">*${esc(v.awbnum||"00000000")}*</div>
          <div class="awb-num">${esc(v.awbnum)}</div>
          ${qrSrc ? `<img src="${qrSrc}" class="qr-img" alt="Scan to track"><div class="qr-label">Scan to Track</div>` : ""}
        </td>
      </tr>
      <tr>
        <td class="lbl">Origin</td>
        <td class="val">${esc(v.origin)}</td>
        <td class="lbl">Destination</td>
        <td class="val" colspan="2">${esc(v.destination)}</td>
      </tr>
      <tr>
        <td class="lbl">Account #</td>
        <td class="val" colspan="4">${esc(v.account)}</td>
      </tr>

      <tr>
        <td class="lbl">Shipper's Name</td>
        <td class="val" colspan="2">${esc(v.shipperName)}</td>
        <td class="lbl">Consignee Name</td>
        <td class="val" colspan="2">${esc(v.consigneeName)}</td>
        <td class="lbl">Consignee Company</td>
      </tr>
      <tr>
        <td class="lbl">Shipper's Address</td>
        <td class="val" colspan="2">${esc(v.shipperAddress)}</td>
        <td class="lbl">Consignee's Address</td>
        <td class="val" colspan="3">${esc(v.consigneeAddress)}</td>
      </tr>
      <tr>
        <td class="lbl">Shipper Email</td>
        <td class="val" colspan="2">${esc(v.shipperEmail)}</td>
        <td class="lbl">Consignee's Email</td>
        <td class="val" colspan="3">${esc(v.consigneeEmail)}</td>
      </tr>
      <tr>
        <td class="lbl">Shipper's NTN / CNIC</td>
        <td class="val" colspan="2">${esc(v.shipperCnic)}</td>
        <td class="lbl">Bag Number</td>
        <td class="val" colspan="3">${esc(v.bagNumber)}</td>
      </tr>
      <tr>
        <td class="lbl">Zip / City / Country (Shipper)</td>
        <td class="val" colspan="2">${esc(v.shipperZip)} — ${esc(v.shipperCity)}, ${esc(v.shipperCountry)}</td>
        <td class="lbl">Zip / City / Country (Consignee)</td>
        <td class="val" colspan="3">${esc(v.consigneeZip)} — ${esc(v.consigneeCity)}, ${esc(v.consigneeCountry)}</td>
      </tr>
      <tr>
        <td class="lbl">Shipper's Telephone #</td>
        <td class="val" colspan="2">${esc(v.shipperPhone)}</td>
        <td class="lbl">Consignee's Telephone #</td>
        <td class="val" colspan="3">${esc(v.consigneePhone)}</td>
      </tr>

      <tr>
        <td class="lbl">Shipper's Reference</td>
        <td class="val" colspan="2">${esc(v.reference)}</td>
        <td class="lbl">Pieces</td>
        <td class="val">${esc(v.pieces)}</td>
        <td class="lbl">Weight</td>
        <td class="val">${esc(v.weight)} KG</td>
      </tr>
      <tr>
        <td class="lbl">Volumetric Weight</td>
        <td class="val" colspan="2">${esc(v.volWeight)} KG</td>
        <td class="lbl">Chargeable Weight</td>
        <td class="val" colspan="3">${esc(v.chargeWeight)} KG</td>
      </tr>
      <tr>
        <td class="lbl">Dimension</td>
        <td class="val" colspan="2">${esc(v.dimension)}</td>
        <td class="lbl">Service</td>
        <td class="val" colspan="3">${esc(v.service)}</td>
      </tr>
      <tr>
        <td class="lbl">Fragile</td>
        <td class="val">${esc(v.fragile)}</td>
        <td class="lbl">Declared Value</td>
        <td class="val" colspan="4">${esc(v.declaredValue)}</td>
      </tr>
      <tr>
        <td class="lbl">Product Detail</td>
        <td class="val" colspan="6">${esc(v.productDetail)}</td>
      </tr>
      <tr>
        <td class="lbl">Comments</td>
        <td class="val" colspan="6">${esc(v.comments)}</td>
      </tr>
      <tr class="note-row">
        <td colspan="7">NOTE: PLEASE DO NOT ACCEPT, IF THE SHIPMENT IS NOT INTACT.</td>
      </tr>
      <tr>
        <td colspan="7" style="text-align:right;">
          <span class="sig-line">Customer's Signature: ______________________________</span>
        </td>
      </tr>
    </table>
  </div>`;
}

function tncHTML(){
  return `
  <div class="tnc">
    <h2>TERMS AND CONDITIONS</h2>
    <p class="notice">
      When ordering ULI's services you, as "Shipper", are agreeing, on your behalf and on behalf of the receiver of the Shipment ("Receiver") and anyone else with an interest in the Shipment that these Terms and Conditions shall apply.
      "Shipment" means all documents or parcels that travel under one AIR WAYBILL and which may be carried by any means ULI chooses, including air, road or any other carrier. A "AIR WAYBILL" shall include any Shipment identifier or document produced by ULI or Shipper automated systems such as a label, barcode, AIR WAYBILL or consignment note as well as any electronic version thereof. Every Shipment is transported on a limited liability basis as provided herein. If Shipper requires greater protection, then insurance may be arranged at an additional cost. "ULI" means any member of the ULI Logistics Network.
    </p>
    <div class="tnc-cols">
      <h3>1. CUSTOM CLEARANCE</h3>
      <p>ULI may perform any of the following activities on Shipper's or Receiver's behalf in order to provide its services: (1) complete any documents, amend product or service codes, and pay any duties, taxes or penalties required under applicable laws and regulations ("Customs Duties"), (2) act as Shipper's forwarding agent for customs and export control purposes and as Receiver solely for the purpose of designating a customs broker to perform customs clearance and entry and (3) redirect the Shipment to Receiver's customs broker or other address upon request by any person who ULI believes in its reasonable opinion to be authorized.</p>

      <h3>2. UNACCEPTABLE SHIPMENTS</h3>
      <p>A Shipment is deemed unacceptable if: no customs declaration is made when required by applicable customs regulations; it contains counterfeit goods, animals, bullion, currency, gem stones, weapons, explosives and ammunition, human remains, illegal items such as ivory and narcotics; it is classified as hazardous material, dangerous goods, prohibited or restricted articles by IATA, ICAO, ADR or other relevant organization ("Dangerous Goods"); its address is incorrect or not properly marked or its packaging is defective or inadequate to ensure safe transportation with ordinary care in handling; it contains any other item which ULI decides cannot be carried safely or legally.</p>

      <h3>3. DELIVERIES AND UNDELIVERABLES</h3>
      <p>Shipments cannot be delivered to PO boxes or postal codes. Shipments are delivered to the Receiver's address given by Shipper but not necessarily to the named Receiver personally. Shipments to addresses with a central receiving area will be delivered to that area.</p>
      <p>If the Shipment is deemed unacceptable, undervalued for customs purposes, or the Receiver cannot be reasonably identified or located, or refuses delivery or payment of Customs Duties or other Shipment charges, ULI may notify Receiver of an upcoming or missed delivery. Receiver may be offered alternative delivery options such as delivery on another day, no signature required, redirection or collection at an ULI Service Point. Shipper may exclude some delivery options on request.</p>
      <p>ULI shall use reasonable efforts to return the Shipment to Shipper at Shipper's cost, failing which the Shipment may be released, disposed of or sold without incurring any liability whatsoever to Shipper or anyone else, with the proceeds applied against Customs Duties, Shipment charges and related administrative costs, with the balance returned to Shipper. ULI shall have the right to destroy any Shipment which any law prevents ULI from returning to Shipper, as well as any Shipment of Dangerous Goods.</p>

      <h3>4. INSPECTION</h3>
      <p>ULI Logistics has the right to open and inspect a Shipment without notice for safety, security, customs or other regulatory reasons.</p>

      <h3>5. ULI LIABILITY</h3>
      <p>5.1 ULI's liability in respect of any one Shipment transported by air (including ancillary road transport or stops en route) is limited by the Montreal Convention or the Warsaw Convention as applicable, or in the absence of such Convention, to the lower of (i) the current market or declared value, or (ii) 22 Special Drawing Rights per kilogram (approximately US$30.00 per kilogram). Such limits also apply to all other forms of transportation, except where Shipments are carried only by road, in which case the limits below apply. For cross border Shipments transported by road, ULI's liability is limited by the CMR Convention to the lower of (i) current market value or declared value, or (ii) 8.33 Special Drawing Rights per kilogram (approximately US$11.00 per kilogram). Such limits also apply to national road transportation in the absence of any mandatory or lower liability limits in applicable law. If Shipper regards these limits as insufficient, it must make a special declaration of value and request insurance, or make its own insurance arrangements.</p>
      <p>5.2 ULI will make every reasonable effort to deliver the Shipment according to its regular delivery schedules, but these schedules are not binding and do not form part of the contract. ULI's liability is strictly limited to direct loss and damage to a Shipment only, up to the per-kilogram limits above. All other types of loss or damage are excluded (including but not limited to lost profits, income, interest, future business), whether special or indirect, even if the risk was brought to ULI's attention. ULI is not liable for any damages or loss caused by delay, but for certain Shipments, Shipper may be able to claim limited delay compensation under the Money Back Guarantee terms and conditions.</p>

      <h3>6. SHIPMENT CHARGES AND FEES</h3>
      <p>ULI's Shipment charges are calculated according to the higher of actual or volumetric weight per piece, and any piece may be re-weighed and re-measured by ULI to confirm this calculation. Shipper, or the Receiver when ULI acts on Receiver's behalf, shall pay or reimburse ULI for all Shipment or other charges due, or Customs Duties owed for services provided by ULI or incurred on Shipper's or Receiver's behalf. Payment of Customs Duties may be requested prior to delivery. If ULI advances credit or Customs Duties on behalf of a Receiver without an account with ULI, ULI shall be entitled to assess a fee.</p>

      <h3>7. INSURANCE AND CLAIMS</h3>
      <p>ULI may be able to arrange insurance covering the value of loss or damage to the Shipment, provided the Shipper instructs ULI in writing and pays the applicable premium. Shipment insurance does not cover indirect loss or damage, or loss or damage caused by delays. All claims must be submitted in writing to ULI within thirty (30) days from the date ULI accepted the Shipment, failing which ULI shall have no liability whatsoever. Claims are limited to one claim per Shipment, and settlement will be full and final for all loss or damage in connection therewith.</p>

      <h3>8. CIRCUMSTANCES BEYOND ULI'S CONTROL</h3>
      <p>ULI is not liable for any loss or damage arising from circumstances beyond its control, including but not limited to electrical or magnetic damage to, or erasure of, electronic or photographic images, data or recordings; a defect or characteristic related to the nature of the Shipment even if known to ULI; an act or omission by a person not employed or contracted by ULI (e.g. Shipper, Receiver, third party, customs or other government official); or Force Majeure events such as earthquake, cyclone, storm, flood, fog, war, plane crash, embargo, riot, civil commotion, or industrial action.</p>

      <h3>9. WARRANTIES AND INDEMNITIES</h3>
      <p>Shipper shall indemnify and hold ULI harmless for any loss or damage arising from Shipper's failure to comply with the following warranties: all information provided by Shipper or its representatives is complete and accurate; the Shipment is acceptable for transport under Section 2 above; the Shipment was prepared in secure premises by reliable persons and protected against unauthorized interference during preparation, storage and transportation to ULI; Shipper has complied with all applicable customs, import, export, data protection laws, sanctions, embargos and other regulations; and Shipper has obtained all necessary consents relating to personal data provided to ULI, including Receiver's data required for transport, customs clearance and delivery.</p>

      <h3>10. ROUTING</h3>
      <p>Shipper agrees to all routing and diversion, including the possibility that the Shipment may be carried via intermediate stopping places.</p>

      <h3>11. MANDATORY LAW</h3>
      <p>These Conditions shall not exclude any liability where such exclusion is prohibited by law. Where any provision of these Conditions is contrary to any applicable international treaty, local law, government regulation, order or requirement, that provision shall be limited to the maximum extent permitted, and as limited shall remain part of the agreement between ULI and the Sender. The invalidity or unenforceability of any provision shall not affect any other part of these Conditions.</p>

      <h3>12. SEVERABILITY</h3>
      <p>The invalidity or unenforceability of any provision shall not affect any other part of these Terms and Conditions.</p>
    </div>
    <div class="tnc-sig">Customer's Signature: ______________________________</div>
  </div>`;
}

function invoiceHTML(v, products){
  const shipperFull = [v.shipperAddress, v.shipperCity, v.shipperZip, v.shipperCountry].filter(Boolean).join(", ");
  const consigneeFull = [v.consigneeAddress, v.consigneeCity, v.consigneeZip, v.consigneeCountry].filter(Boolean).join(", ");

  let grandTotal = 0;
  const rows = products.map((p, i)=>{
    const qty = parseFloat(p.qty) || 0;
    const price = parseFloat(p.price) || 0;
    const lineTotal = qty * price;
    grandTotal += lineTotal;
    return `
      <tr>
        <td>${i+1}</td>
        <td>${esc(p.desc)}</td>
        <td>${esc(p.hsCode)}</td>
        <td>${esc(p.uom)}</td>
        <td class="num">${esc(p.qty)}</td>
        <td class="num">${price.toFixed(2)}</td>
        <td class="num">${lineTotal.toFixed(2)}</td>
      </tr>`;
  }).join("");

  return `
  <div class="invoice">
    <div class="invoice-head">
      <img src="${LOGO_DATA_URI}" alt="Universal Logistics & International">
      <div class="invoice-title">
        <h2>${esc(v.invoiceType || "GIFT INVOICE")}</h2>
        <div class="awb">AIR WAYBILL NUMBER: ${esc(v.awbnum)}</div>
      </div>
    </div>

    <div class="invoice-parties">
      <div class="invoice-party">
        <h3>SHIPPER'S DETAILS</h3>
        <div><b>Name:</b> ${esc(v.shipperName)}</div>
        <div><b>Address:</b> ${esc(shipperFull)}</div>
        <div><b>Tax ID:</b> ${esc(v.shipperTaxId)}</div>
        <div><b>Phone:</b> ${esc(v.shipperPhone)}</div>
      </div>
      <div class="invoice-party">
        <h3>RECEIVER'S DETAILS</h3>
        <div><b>Name:</b> ${esc(v.consigneeName)}</div>
        <div><b>Address:</b> ${esc(consigneeFull)}</div>
        <div><b>Tax ID:</b> ${esc(v.consigneeTaxId)}</div>
        <div><b>Phone:</b> ${esc(v.consigneePhone)}</div>
      </div>
    </div>

    <table class="invoice-table">
      <tr>
        <th>S.No.</th>
        <th>Particulars / Item Description</th>
        <th>HS Code</th>
        <th>Unit of Measure</th>
        <th class="num">Quantity</th>
        <th class="num">Unit Price (USD)</th>
        <th class="num">Total Price (USD)</th>
      </tr>
      ${rows}
    </table>

    <div class="invoice-totals">
      <div>Total pieces: <b>${esc(v.pieces)}</b> &nbsp; | &nbsp; Total weight: <b>${esc(v.weight)} KG</b> &nbsp; | &nbsp; Dimension: <b>${esc(v.dimension)}</b></div>
      <div class="grand">TOTAL: USD ${grandTotal.toFixed(2)}</div>
    </div>

    <div class="invoice-undertaking">
      <h4>UNDERTAKING</h4>
      I under sign undertake full responsibility of my parcel # ${esc(v.awbnum)}. It does not contain any contraband items, narcotics or any IATA restricted items, and I assure that my parcel contents, declared value and proof of payment are correct and true. In case of any declaration or discrepancy and any duty/taxes at the destination, if not paid by the consignee, it would be the sole responsibility of the undersigned.
    </div>

    <div class="invoice-sigs">
      <div>Shipper's Signature: ______________________________</div>
      <div>Shipper's Thumb Impression: ______________________________</div>
    </div>
  </div>`;
}
function leafName(desc){
  const parts = desc.split(" - ").map(p=>p.trim()).filter(Boolean);
  return parts.length ? parts[parts.length-1] : desc;
}

function pageWrap(innerHtml){
  return `
  <div class="page">
    <div class="page-topbar"></div>
    <div class="page-body">${innerHtml}</div>
    <div class="page-footer">UNIVERSAL LOGISTICS &amp; INTERNATIONAL &nbsp;|&nbsp; <b>Delivering the Best</b></div>
  </div>`;
}

// Support both browser (<script> tag) and Node.js (require) usage
if (typeof module !== "undefined" && module.exports) {
  module.exports = { esc, fmtDate, billHTML, tncHTML, invoiceHTML, leafName, pageWrap, LOGO_DATA_URI, qrDataUri, trackingUrl };
}
