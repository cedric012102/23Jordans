import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../../styles/FeedStyles';

export function ReleaseDateCard({
  item,
  userName,
  userImg,
  name,
  link,
  postImg,
  liked,
  likes,
  comments,
}) {
  likeIcon = liked ? 'heart' : 'heart-outline';
  likeIconColor = liked ? '#2e64e5' : '#333';

  if (likes == 1) {
    likeText = '1 Like';
  } else if (likes > 1) {
    likeText = likes + ' Likes';
  } else {
    likeText = 'Show Some Love';
  }

  if (comments == 1) {
    commentText = '1 Comment';
  } else if (comments > 1) {
    commentText = comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  const [isLiked, setIsLiked] = useState(0);
  const [post, setPost] = useState(post);

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  const navigation = useNavigation();

  return (
    <>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/users/jordanlogo.webp')} />
          <UserInfoText>
            <UserName>{userName}</UserName>
            {/* <PostTime>{item.postTime}</PostTime> */}
          </UserInfoText>
        </UserInfo>
        <PostText>{name}</PostText>
        <TouchableOpacity onPress={link}>
          {postImg != 'none' ? <PostImg source={postImg} /> : <Divider />}
        </TouchableOpacity>

        <InteractionWrapper>
          <Interaction active={liked} onPress={onLikePress}>
            <Ionicons
              name={likeIcon}
              size={25}
              color={isLiked ? 'blue' : 'white'}
            />
            <InteractionText active={liked}>{likeText}</InteractionText>
          </Interaction>
          {/* <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction> */}
        </InteractionWrapper>
      </Card>
    </>
  );
}
