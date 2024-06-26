import styled from "styled-components/native";
import { RectButton } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { ThemeType } from "styled-components";


export const Button = styled(RectButton)`
    width: ${RFValue(60)}px;
    height: ${RFValue(60)}px;
    background-color: ${({ theme }: { theme: ThemeType }) => theme.COLORS.GRAY5};
    border-radius: ${RFValue(8)}px;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin-bottom: ${RFValue(16)}px;
    margin-left: ${RFValue(10)}px;
`;

export const IconGoogle = styled.Image`
    width: ${RFValue(40)}px;
    height: ${RFValue(40)}px;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    font-family: ${({ theme }: { theme: ThemeType }) => theme.FONTS.POPPINSMEDIUM};
    color: ${({ theme }: { theme: ThemeType }) => theme.COLORS.GRAY2};
`