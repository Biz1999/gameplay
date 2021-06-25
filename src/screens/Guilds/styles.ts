import { StyleSheet } from 'react-native';
import { theme } from '../../global/styles/theme';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 24
    },
    guilds: {
        width: '100%'
    },
    firstDivider: {
        width: '75%',
        height: 1,
        backgroundColor: theme.colors.secondary40,
        marginVertical: 15,
        marginTop: 2,
        alignSelf: 'flex-end'
    }
})