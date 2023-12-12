import React, { useEffect, useState } from 'react';
import c from './Users.module.css';
import { NavLink } from 'react-router-dom';
import Button from './Button';
import UnfoundAva from '../../Img/avaUnfound.jpg';
import Users from './Users';
import Loader from '../Loader/Loader';
import {
  axiosFollowDelete,
  axiosFollowPost,
  axiosGetUsers,
} from '../../API/API';
import { batch } from 'react-redux';

const UsersListContainer = () => {
  const [users, setUsers] = useState(null);
  const [totalPages, setTotalPages] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [PagesCount, setPagesCount] = useState(10);
  const [followingID, setFollowingID] = useState([]);

  useEffect(() => {
    axiosGetUsers(currentPage > 1 ? currentPage : 1, PagesCount).then(
      (data) => {
        setUsers(data.items);
        setTotalPages(Math.ceil(data.totalCount / PagesCount));
      },
    );
  }, [currentPage, PagesCount]);

  const followPost = (id) => {
    followingInProgress(id);
    axiosFollowPost(id).then((data) => {
      if (data.resultCode === 0) {
        batch(() => {
          setUsers((users1) => {
            return users1.map((user) => {
              if (user.id === id) {
                return { ...user, followed: true };
              }
              return user;
            });
          });
          setFollowingID((prevFollowingID) =>
            prevFollowingID.filter((item) => item !== id),
          );
        });
      }
    });
  };
  const followDelete = (id) => {
    followingInProgress(id);
    axiosFollowDelete(id).then((data) => {
      if (data.resultCode === 0) {
        batch(() => {
          setUsers((users1) => {
            return users1.map((user) => {
              if (user.id === id) {
                return { ...user, followed: false };
              }
              return user;
            });
          });
          setFollowingID((prevFollowingID) =>
            prevFollowingID.filter((item) => item !== id),
          );
        });
      }
    });
  };

  const followingInProgress = (id) => {
    const data = [...followingID, id];
    setFollowingID(data);
  };

  const everyUser = users?.map(
    ({ name, id, uniqueUrlName, status, followed, photos: { small } }) => {
      return (
        <div className={c.GridKurwa} key={id}>
          <div className={c.Extension}>
            <NavLink to={`/users/${id}`}>
              <img src={small ? small : UnfoundAva} className={c.MiniAvatar} />
            </NavLink>
            <Button
              followingId={followingID}
              disabled={followingInProgress}
              id={id}
              title={followed ? 'Unfollow' : 'Follow'}
              onClick={() => (followed ? followDelete(id) : followPost(id))}
            />
          </div>
          <div className={c.MainInfo}>
            <NavLink to={`/users/${id}`} className={c.item}>
              <div className={c.User}>
                <div className={c.Name}>{name}</div>
                <div className={c.Country}>{status}</div>
                <div className={c.City}>{uniqueUrlName}</div>
                <div className={c.Status}>kurwa</div>
              </div>
            </NavLink>
          </div>
        </div>
      );
    },
  );

  if (!users) {
    return <Loader />;
  }
  return (
    <Users
      setCurrentPage={setCurrentPage}
      currentPage={currentPage}
      everyUser={everyUser}
      totalPages={totalPages}
      PagesCount={PagesCount}
      setPagesCount={setPagesCount}
    />
  );
};

export default UsersListContainer;
