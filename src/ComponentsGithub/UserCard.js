import React from "react";
import {Card, CardBody} from "reactstrap"

//assuming this user object have been given
const UserCard =({user}) => {
    return(
        <Card className="text-center mt-3 mb-4">
        <img src={user.avatar_url} className="img-thumbnail" />
        <CardBody>
        <div className="text-primary" style={{fontWeight:'bold'}}>{user.name}</div>
        <div className="text-primary">{user.location}</div>
        <div className="text-primary">{user.bio}</div>
        <div className="text-success">Available for hire: {user.hireable ? 'Yes' : 'No'}</div>
        <div className="text-success">Followers {user.followers}</div>
        </CardBody>
        </Card>
    )

}

export default UserCard;