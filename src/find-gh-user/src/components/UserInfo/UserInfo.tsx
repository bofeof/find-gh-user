import { LocalGithubUser } from 'types';
import styles from './UserInfo.module.scss';
import { InfoItemProps } from 'components/InfoItem';

import { ReactComponent as CompanyIcon } from '../../assets/icon-company.svg';
import { ReactComponent as LocationIcon } from '../../assets/icon-location.svg';
import { ReactComponent as TwitterIcon } from '../../assets/icon-twitter.svg';
import { ReactComponent as WebsiteIcon } from '../../assets/icon-website.svg';
import InfoItem from 'components/InfoItem/InfoItem';

interface UserInfoProps extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

const UserInfo = ({ blog, company, location, twitter }: UserInfoProps) => {
  const items: InfoItemProps[] = [
    {
      icon: <LocationIcon />,
      text: location,
    },
    {
      icon: <CompanyIcon />,
      text: company,
    },
    {
      icon: <WebsiteIcon />,
      text: blog,
      isLink: true,
    },
    {
      icon: <TwitterIcon />,
      text: twitter,
      isLink: true,
    },
  ];

  return (
  
  <div className={styles.userInfo}>
    
    {items.map((item, idx) => (
      <InfoItem {...item} key={idx}/>
    ))}
    
    </div>);
};

export default UserInfo;
