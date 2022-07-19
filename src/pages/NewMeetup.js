import { useNavigate } from 'react-router-dom';

import NewMeetupForm from "../Components/layout/meetups/NewMeetupForm";

function NewMeetupPage(){
    const history = useNavigate();

    function addMeetupHandler(meetupData){
        fetch('https://react-project-60772-default-rtdb.firebaseio.com/meetups.json', 
            {
                method : 'POST',
                body : JSON.stringify(meetupData),
                headers : {
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            history.replace('/');
        });
    
    }    

    return (
    <section>
        <h1> Add new meetup </h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
    );

}

export default NewMeetupPage;