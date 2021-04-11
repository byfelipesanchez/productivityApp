import React from 'react';
import { Image } from 'react-native';
import { styles } from '../stylesheet';

export default class Picture extends React.Component {
	render() {
	return (
		<Image
          style={styles.image}
          source={{uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.kaplaninternational.com%2Fbr%2Fblog%2Fcomo-usar-fun-e-funny&psig=AOvVaw3T4MaVZT4cEBOGTA8KQGzr&ust=1618191101518000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCJDdlOKF9e8CFQAAAAAdAAAAABAJ'}}
        />
	)
	}
}