import { View, Pressable, Text, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsProps } from '../../restaurants'; 

export function RestaurantItem({restaurant}: {restaurant: RestaurantsProps}) {
 return (
   <Pressable className='flex flex-row items-center justify-start gap-2'>
    <Image
        source={{uri: restaurant.image}}
        className='w-20 h-20 rounded-full'
    />

    <View className='flex gap-2'>
        <Text className='text-base text-black leading-4 font-bold' numberOfLines={2}>
            {restaurant.name}
        </Text>
        <View className='flex-row items-center gap-1'>
            <Ionicons
                name='star'
                size={14}
                color="#ca8a04"
            />
            <Text className='text-sm'>4.5</Text>
        </View>
    </View>
   </Pressable>
  );
}