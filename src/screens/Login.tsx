import React from 'react';
import { SafeAreaView } from 'react-native';
import { ButtonSocialGoogle } from '@src/components/ButtonSocialGoogle/ButtonSocialGoogle';

import { 
    Container,
    ContentHeader,
    ContentBody,
    ContentFooter,
    Title,
    Description,
    ViewButton,
} from './styles';

const Login: React.FC = () => {
    return (
        <SafeAreaView>
            <Container>
                <ContentHeader>
                    <Title>Seja bem vindo(a) ao {"\n"}Fechamento Caixa App</Title>
                    <Description>Cadastre-se com</Description>
                    <ViewButton>
                        <ButtonSocialGoogle title="Google" />
                        <ButtonSocialGoogle title="Google" />
                    </ViewButton>
                </ContentHeader>

                <ContentBody>

                </ContentBody>

                <ContentFooter>

                </ContentFooter>
            </Container>
        </SafeAreaView>
    );
};

export { Login };