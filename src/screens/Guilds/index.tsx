import React from 'react'
import {
    View,
    Text,
    FlatList
} from 'react-native';
import { Guild, GuildProps } from '../../components/Guild';
import { ListDivider } from '../../components/ListDivider';

import { styles } from './styles';

type Props = {
    handleGuildSelect: (guild: GuildProps) => void;
}

export const Guilds = ({ handleGuildSelect }: Props) => {
    const guilds = [
        {
            id: '1',
            name: 'Lendários',
            icon: 'image.png',
            owner: true
        },
        {
            id: '2',
            name: 'Uma vez flamengo',
            icon: 'image.png',
            owner: false
        },
        {
            id: '3',
            name: 'Vai corintia',
            icon: 'image.png',
            owner: false
        },
    ]
    return (
        <View style={styles.container}>
            <View style={styles.firstDivider} />
            <FlatList
                data={guilds}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Guild
                        data={item}
                        onPress={() => handleGuildSelect(item)}
                    />
                )}
                ItemSeparatorComponent={() => <ListDivider />}
                style={styles.guilds}
            />
        </View>
    )
}
