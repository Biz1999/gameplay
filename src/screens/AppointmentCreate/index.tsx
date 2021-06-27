import React, { useState } from 'react';
import { RectButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import {
    View,
    Text,
    ScrollView,
    KeyboardAvoidingView,
    Platform
} from 'react-native';

import { theme } from '../../global/styles/theme';
import { styles } from './styles';

import { Background } from '../../components/Background';
import { CategorySelect } from '../../components/CategorySelect';
import { GuildIcon } from '../../components/GuildIcon';
import { SmallInput } from '../../components/SmallInput';
import { GuildProps } from '../../components/Guild';
import { TextArea } from '../../components/TextArea';
import { ModalView } from '../../components/ModalView';
import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Guilds } from '../Guilds';

export const AppointmentCreate = () => {
    const [category, setCategory] = useState('');
    const [openGuildsModal, setOpenGuildsModal] = useState(false);
    const [guild, setGuild] = useState<GuildProps>({} as GuildProps);

    const handleOpenGuilds = () => {
        setOpenGuildsModal(!openGuildsModal);
    }
    const handleGuildSelect = (guildSelect: GuildProps) => {
        setGuild(guildSelect);
        setOpenGuildsModal(false);
    }

    const handleCategorySelect = (categoryId: string) => {
        setCategory(categoryId);
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <Background>
                <ScrollView>
                    <Header
                        title="Agendar Partida"
                    />
                    <Text style={[
                        styles.label,
                        { marginLeft: 24, marginTop: 26, marginBottom: 18 }]}>
                        Categoria
                    </Text>

                    <CategorySelect
                        hasCheckBox
                        setCategory={handleCategorySelect}
                        categorySelected={category}
                    />

                    <View style={styles.form}>
                        <RectButton
                            onPress={handleOpenGuilds}
                        >
                            <View style={styles.select}>
                                {
                                    guild.icon
                                        ?
                                        <GuildIcon />
                                        :
                                        <View style={styles.image} />
                                }
                                <View style={styles.selectBody}>
                                    <Text style={styles.label}>
                                        {guild.name ? guild.name : 'Selecione um servidor'}
                                    </Text>
                                </View>
                                <Feather
                                    name="chevron-right"
                                    color={theme.colors.heading}
                                    size={18}
                                />
                            </View>
                        </RectButton>
                        <View style={styles.field}>
                            <View>
                                <Text style={styles.label}>
                                    Dia e mês
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput />
                                    <Text style={styles.divider}>
                                        /
                                    </Text>
                                    <SmallInput />
                                </View>
                            </View>
                            <View>
                                <Text style={styles.label}>
                                    Hora e minuto
                                </Text>
                                <View style={styles.column}>
                                    <SmallInput />
                                    <Text style={styles.divider}>
                                        :
                                    </Text>
                                    <SmallInput />
                                </View>
                            </View>
                        </View>
                        <View style={[styles.field, { marginBottom: 12 }]}>
                            <Text style={styles.label}>
                                Descrição
                            </Text>

                            <Text style={styles.caracteresLimit}>
                                Max 100 caracteres
                            </Text>
                        </View >
                        <TextArea
                            multiline
                            maxLength={100}
                            numberOfLines={5}
                            autoCorrect={false}
                        />
                        <View style={styles.footer}>
                            <Button
                                title="Agendar"
                            />
                        </View>
                    </View>
                </ScrollView>
            </Background>
            <ModalView
                visible={openGuildsModal}
                closeModal={handleOpenGuilds}
            >
                <Guilds handleGuildSelect={handleGuildSelect} />
            </ModalView>
        </KeyboardAvoidingView>
    )
}

