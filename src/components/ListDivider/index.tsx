import React from 'react'
import { View } from 'react-native';

import { styles } from './styles';

type Props = {
    isCentered?: boolean;
}

export const ListDivider = ({ isCentered }: Props) => {
    return (
        <View
            style={[
                styles.container,
                isCentered ?
                    {
                        width: '73%',
                        marginVertical: 12,
                    } :
                    {
                        marginVertical: 31,
                        marginTop: 2
                    }
            ]}
        >
        </View>
    )
}
