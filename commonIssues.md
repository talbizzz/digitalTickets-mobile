# Common Issues

## Issue 1: [Issue Title]

**Description:** [!] Invalid Podfile file:
[!] Invalid RNSVG.podspec file: undefined method `visionos' for #<Pod::Specification name="RNSVG">.

**Symptoms:** runtime error when using SVGs

**Possible Causes:** 1/ package react-native-svg not installed 2/ package react-native-svg-transformer not installed and/or metro.config.js not correctly set 3/ node_module/react-native-svg/RNSVG.podspec file is triggering the error

**Solution:**

### 2/metro.config.js:

    const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
    const defaultSourceExts =
        require('metro-config/src/defaults/defaults').sourceExts;
    const defaultAssetExts =
        require('metro-config/src/defaults/defaults').assetExts;
    const config = {
    transformer: {
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        getTransformOptions: async () => ({
        transform: {
            experimentalImportSupport: false,
            inlineRequires: true,
        },
        }),
    },
    resolver: {
        assetExts: defaultAssetExts.filter(ext => ext !== 'svg'),
        sourceExts: [...defaultSourceExts, 'svg'],
    },
    };

    module.exports = mergeConfig(getDefaultConfig(__dirname), config);

### 3/

https://github.com/software-mansion/react-native-svg/issues/2241#issuecomment-1985785641

## Issue 2: SVG as a Generic component

https://github.com/vinipachecov/rn-typescript-svg-setup?tab=readme-ov-file#svg-setup

## Issue 3: [Issue Title]

**Description:** [Brief description of the issue]

**Symptoms:** [List of symptoms indicating the presence of the issue]

**Possible Causes:** [List of possible causes for the issue]

**Solution:** [Steps to resolve the issue]

...
