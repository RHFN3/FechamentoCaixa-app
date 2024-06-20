import styled from "styled-components/native";
import { Fontisto } from '@expo/vector-icons'
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ThemeType } from "styled-components";


export const Button = styled(RectButton)`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    border-radius: ${RFValue(8)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(16)}px;
    margin-left: ${RFValue(10)}px;
`;

export const Icon = styled(Fontisto)` 
   font-size: ${RFValue(28)}px;
   align-items: center;
   justify-content: center;
   color: ${({ theme }: { theme: ThemeType }) => theme.COLORS.WHITE}; 
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }: { theme: ThemeType }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }: { theme: ThemeType }) => theme.COLORS.GRAY2};
`