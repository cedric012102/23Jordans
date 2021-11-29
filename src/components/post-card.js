import React, {useContext, useEffect, useState} from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity, Linking} from 'react-native';

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

const PostCard = ({item}) => {
  likeIcon = item.liked ? 'heart' : 'heart-outline';
  likeIconColor = item.liked ? '#2e64e5' : '#333';

  if (item.likes == 1) {
    likeText = '1 Like';
  } else if (item.likes > 1) {
    likeText = item.likes + ' Likes';
  } else {
    likeText = 'Show Some Love';
  }

  if (item.comments == 1) {
    commentText = '1 Comment';
  } else if (item.comments > 1) {
    commentText = item.comments + ' Comments';
  } else {
    commentText = 'Comment';
  }

  const nikeSite = () => {
    Linking.openURL('https://www.nike.com/launch');
  };

  const stockX = () => {
    Linking.openURL('https://stockx.com');
  };

  const [isLiked, setIsLiked] = useState(0);
  const [post, setPost] = useState(item.post);

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: item.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <Card>
      <UserInfo>
        <UserImg source={item.userImg} />
        <UserInfoText>
          <UserName>{item.userName}</UserName>
          {/* <PostTime>{item.postTime}</PostTime> */}
        </UserInfoText>
      </UserInfo>
      <PostText>{item.post}</PostText>
      <TouchableOpacity onPress={item.link}>
        {item.postImg != 'none' ? (
          <PostImg source={item.postImg} />
        ) : (
          <Divider />
        )}
      </TouchableOpacity>

      <InteractionWrapper>
        <Interaction active={item.liked} onPress={onLikePress}>
          <Ionicons
            name={likeIcon}
            size={25}
            color={isLiked ? 'blue' : 'white'}
          />
          <InteractionText active={item.liked}>{likeText}</InteractionText>
        </Interaction>
        {/* <Interaction>
          <Ionicons name="md-chatbubble-outline" size={25} />
          <InteractionText>{commentText}</InteractionText>
        </Interaction> */}
      </InteractionWrapper>
    </Card>
  );
};

export default PostCard;
