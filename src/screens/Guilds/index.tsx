import React, { useEffect, useState } from 'react'
import {
    View,
    FlatList
} from 'react-native';

import { styles } from './styles';

import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';
import { Load } from '../../components/Load';
import { api } from '../../services/api';


type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export const Guilds = ({ handleGuildSelect }: Props) => {
    const [guilds, setGuilds] = useState<GuildProps[]>([]);
    const [loading, setLoading] = useState(true);

    const fetchGuilds = async () => {
        const response = await api.get('/users/@me/guilds');

        setGuilds(response.data);
        setLoading(false);
    }

    useEffect(() => {
        fetchGuilds();
    }, [])
    return (
        <View style={styles.container}>
            {
                loading ? <Load /> :
                    <FlatList
                        data={guilds}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => (
                            <Guild
                                data={item}
                                onPress={() => handleGuildSelect(item)}
                            />
                        )}
                        ItemSeparatorComponent={() => <ListDivider isCentered />}
                        contentContainerStyle={{ paddingBottom: 68, paddingTop: 103 }}
                        ListHeaderComponent={() => <ListDivider isCentered />}
                        style={styles.guilds}
                    />}
        </View>
    )
}
