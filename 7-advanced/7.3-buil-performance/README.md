+ ./
    - babel-loader
    - default
    - dist
    - node_modules
    - root-vs-modulesDirectories
    - src

# 开发环境
| 配置 | 构建时间 | 重构时间 | sourceMap | 大小 |
| --- | --- | --- | --- | --- |
| default | 13222ms，13828ms，13730ms | 441ms，418ms，409ms | no | 1.36MB |
| noParse | 12696ms，12245ms，12896ms | | no | 1.26 MB |
| root | 13938ms，13856ms，13675ms | | no | 1.36 MB |
| babel-cache | 3320ms，3275ms，3235ms | | no | 1.36MB |
| babel-include | 10477ms，9779ms，9838ms | | no | 1.36MB |
| babel-exclude | 9886ms，9851ms，9760ms | | no | 1.36MB |
| devtool-source-map | 16519ms，16531ms，16078ms | | yes | 1.36MB + ??? |
| devtool-hidden-source-map | 16227ms，16425ms，16121ms | | yes | 1.36MB + ???|
| devtool-inline-source-map | 15943ms，16189ms，16291ms | | yes | 3.73 MB |
| devtool-eval-source-map | 16419ms，16228ms，16125ms | | yes | 3.81 MB |
| devtool-cheap-source-map | 13811ms，14726ms，14173ms | | yes | 1.36MB + ??? |
| devtool-eval | 13845ms，13681ms，13420ms | | no | 1.44 MB |
| DLLPlugin | 11239ms，10989ms，10760ms | | no | 634kB + 724KB |
| happypack | 9896ms，9760ms，10145ms | | no | 634kB + 724KB |
| cache | 13741ms，13646ms，14006ms | | no | 1.36MB |
| best-practice | 2007ms，2194ms，2020ms | 407ms，344ms，148ms | yes | 1.68 MB + 724KB |

# 生产环境
| 配置 | 时间 | 大小 |
| --- | --- | --- |
| default | 13222ms，13828ms，13730ms | 1.36MB |
| root | 13344ms，13203ms，13508ms | 1.36 MB |
| babel-cache | 3049ms，3072ms，3092ms | 1.36MB |
| babel-include | 9857ms，9945ms，10051ms | 1.36MB |
| babel-exclude | 9716ms，10017ms，10017ms | 1.36MB |
| UglifyJsPlugin | 22701ms，21299ms，21852ms | 486KB |
| OccurrenceOrderPlugin | 13864ms，13524ms，13573ms | 1.36MB |
| DedupePlugin | 13903ms，13531ms，13641ms | 1.36MB |
| DLLPlugin | 969ms，10406ms，10549ms | 634kB + 724KB |
| happypack | 10297ms，10776ms，9919ms | 1.36 MB |
| cache | 13197ms，13510ms，13732ms | 1.36 MB |
| best-practice | 5836ms，5753ms，5494ms | 267 kB + 724KB |
