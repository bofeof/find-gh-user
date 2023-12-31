import styles from './UserCard.module.scss';
import { UserStat } from 'components/UserStat';
import UserTitle from 'components/UserTitle/UserTitle';
import { LocalGithubUser } from 'types';
import UserInfo from 'components/UserInfo/UserInfo';

interface UserCardProps extends LocalGithubUser {}

const UserCard = (props: UserCardProps) => {
  return (
    <div className={styles.userCard}>

      <img src={props.avatar} alt={props.login} className={styles.avatar}></img>

      <UserTitle created={props.created} login={props.login} name={props.name} />

      <p className={`${styles.bio}${props.bio ? '' : `${styles.empty}`}`}>{props.bio || 'This profile has no bio'}</p>

      <UserStat followers={props.followers} following={props.following} repos={props.repos} />

      <UserInfo blog={props.blog} location={props.location} company={props.company} twitter={props.twitter} />
    </div>
  );
};

export default UserCard;
