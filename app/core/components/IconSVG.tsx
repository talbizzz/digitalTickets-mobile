/* This component is generated automatically by generateAssets.py. Do not edit it manually. 
The component getAsset() helps us to use our theme on the svgs and make importing easier.
To update please run `npm run generateAssets.ts`*/
import {colors} from '../../styles/colors';
import React from 'react';
import {SvgProps} from 'react-native-svg';
import Home from '../../assets/svgs/Home.svg';
import Scanner from '../../assets/svgs/Scanner.svg';

export type SVGName = 'Home' | 'Scanner';

const svgs: {
  [name: string]: React.FC<
    SvgProps & {primary?: string | undefined; secondary?: string | undefined}
  >;
} = {Home: Home, Scanner: Scanner};

type Props = {
  name: SVGName;
  primaryColor?: string;
  secondaryColor?: string;
} & SvgProps;

export const IconSVG = (props: Props) => {
  const {name, primaryColor, secondaryColor} = props;
  const Icon = svgs[name];
  return (
    <Icon
      {...props}
      primary={primaryColor ?? colors.primary}
      secondary={secondaryColor ?? colors.medium}
    />
  );
};
