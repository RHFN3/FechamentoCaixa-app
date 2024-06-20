import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { ThemeType } from 'styled-components';

export const Container = styled.View`
  
`;


export const ContentHeader = styled.View`
    padding: ${RFValue(20)}px;
    align-items: center;
    justify-content: center;
`;

export const ContentBody = styled.View``;

export const ContentFooter = styled.View``;

export const ViewButton = styled.View`
    flex-direction: row;
`;

export const Title = styled.Text`
    font-size: ${RFValue(20)}px;
    text-align: center;
    margin-top: ${RFValue(20)}px;
    font-family: ${({ theme }: { theme: ThemeType }) => theme.FONTS.POPPINSMEDIUM};
`;

export const Description = styled.Text`
    margin-top: ${RFValue(50)}px;
    font-size: ${RFValue(12)}px;
    text-align: center;
    font-family: ${({ theme }: { theme: ThemeType }) => theme.FONTS.POPPINSLIGHT};
    margin-bottom: ${RFValue(10)}px;
`;

