import { userService } from 'services';

export default Home;

function Home() {
    return (
        <div className="p-4">
            <div className="container">
                <h1>Hi {userService.userValue?.firstName}!</h1>
                <p>Congratulation!! You&apos;re logged in</p>
            </div>
        </div>
    );
}
