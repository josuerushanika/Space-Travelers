import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Profile = () => {
  const { missions } = useSelector((state) => state.missions);
  const rockets = useSelector((state) => state.rockets.rocketListData);
  const [joinedMissions, setJoinedMissions] = useState([]);
  const [reservedRockets, setReservedRockets] = useState([]);

  useEffect(() => {
    const filteredMissions = missions.filter((mission) => mission.joined);
    setJoinedMissions(filteredMissions);
  }, [missions]);

  useEffect(() => {
    const filteredRockets = rockets.filter((rocket) => rocket.reserved);
    setReservedRockets(filteredRockets);
  }, [rockets]);

  return (
    <div>
      <div className="missionBox">
        <h1>My Missions</h1>
        {joinedMissions.length ? (
          <div className="joinedMissions">
            {joinedMissions.map((mission) => (
              <div key={mission.mission_id} className="joinedMission">
                {mission.mission_name}
              </div>
            ))}
          </div>
        ) : (
          <div className="noJoined">No Missions Joined</div>
        )}
      </div>

      <div className="missionBox">
        <h1>My Rockets</h1>
        {reservedRockets.length ? (
          <div className="reservedRockets">
            {reservedRockets.map((rocket) => (
              <div key={rocket.rocket_id} className="reservedRocket">
                {rocket.name}
              </div>
            ))}
          </div>
        ) : (
          <div className="noReserved">No Rockets Reserved</div>
        )}
      </div>
    </div>
  );
};

export default Profile;
