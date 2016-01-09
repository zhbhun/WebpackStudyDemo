entry: {
  bundle1: './build/bundles/bundle1.js',
  bundle2: './build/bundles/bundle2.js',
  'vendor-bundle1': [
    'react',
    'react-router'
  ],
  'vendor-bundle2': [
    'react',
    'react-router',
    'flummox',
    'immutable'
  ]
},

plugins: [
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor-bundle1',
    chunks: ['bundle1'],
    filename: 'vendor-bundle1.js',
    minChunks: Infinity
  }),
  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor-bundle2',
    chunks: ['bundle2'],
    filename: 'vendor-bundle2-whatever.js',
    minChunks: Infinity
  }),
]


entry: {
    page1: ['entry.js'],
    page2: ['entry2.js'],
    "vendor-page1": [
        'lodash'
    ],
    "vendor-page2": [
        'jquery'
    ]
},

new webpack.optimize.CommonsChunkPlugin("vendor-page1", "vendor-page1.js", Infinity),
new webpack.optimize.CommonsChunkPlugin("vendor-page2", "vendor-page2.js", Infinity),
