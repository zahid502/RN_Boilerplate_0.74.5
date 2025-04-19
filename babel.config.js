module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      // 'transform-remove-console',
      {
        root: ['./src'],
        alias: {
          '@images': './src/assets/images',
          '@svgs': './src/assets/svgs',
          '@redux': './src/redux',
          '@fonts': './src/utils/fonts',
          '@app-configs': './src/configs',
          '@hooks': './src/hooks',
          '@app-interfaces': './src/interfaces',
          '@app-types': './src/types',
          '@constants': './src/constants/index.ts',
          '@components': './src/components',
          '@dtos-models': ['./src/data/models/dtos'],
          '@domain-models': ['./src/data/models/domain'],
          '@responses': ['./src/data/models/responses'],
          '@mappers': ['./src/data/mappers'],
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@services': './src/services/',
          '@app-utils': './src/utils',
        },
        extensions: ['.js', '.ts', '.tsx', '.ios.js', '.android.js'],
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
