import project1 from './assets/images/project1.png';
import project1x1 from './assets/images/project1-x1.png';
import project2 from './assets/images/project2.png';
import project2x1 from './assets/images/project2-x1.png';
import project3 from './assets/images/project3.png';
import project4 from './assets/images/project4.png';
import project4x1 from './assets/images/project4-x1.png';
import project4x2 from './assets/images/project4-x2.png';
import project4x3 from './assets/images/project4-x3.png';
import project5 from './assets/images/project5.png';
import { LinkButton } from './StyledComponents';

const projects = [
    {
        id: '1',
        title: 'Black Tax and White Benefits',
        excerpt: 'A mobile version of a Wordpress Blog on systemic racism.',
        description: <>
            <h3>Overview</h3>
            <p>
                The <strong>Black Tax and White Benefits</strong> app is a Flutter-based application designed to address issues of racism and prejudice through insightful content and community engagement. Utilizing modern technologies such as Riverpod, Drift, Retrofit, Firebase Analytics, and Freezed, this app aims to facilitate discussions and provide resources related to social justice.
            </p>
            <p style={{ 'textAlign': 'center' }}>
                You can install the app from the <a
                    href='https://play.google.com/store/apps/details?id=com.blacktaxandwhitebenefits.gfapp&hl=en&pli=1'
                    target='_blank'
                    rel="noreferrer">
                    Google Play Store
                </a>
            </p>
            <h3>Purpose</h3>
            <p>
                Inspired by a rich history of ministry and leadership training, the app emerges from a personal journey of reflection and purpose. After a fulfilling career in ministry, the Gordon Ferguson recognized the need to contribute to societal change through writing and teaching. The app serves as a platform for sharing articles, resources, and insights that highlight the systemic inequalities affecting Black communities.
            </p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Featured Articles</strong>: The app prominently displays a featured article at the top of the home feed, allowing users to engage with critical topics first.</li>
                <li><strong>User Engagement</strong>: Users can favorite and share articles directly from the home feed, fostering a sense of community and encouraging discussions.</li>
                <li><strong>Customizable Readability</strong>: The app includes options to increase or decrease text size, enhancing accessibility and user experience.</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ padding: '16px' }} src={project1x1} alt='Screenshots from the app.' />
            </div>
            <h3>Technology</h3>
            <p>The app also makes use of a few key technologies:</p>
            <ul>
                <li><strong>Firebase Analytics</strong>: Information about how often features are used can be stored and monitored to best serve app users.</li>
                <li><strong>Firebase Crashlytics</strong>: Custom crash reports make it easy to find bugs in a production app.</li>
                <li><strong>CI/CD</strong>: Using Codemagic, app bundles are built, widget testing is performed, and screenshots are taken automatically.</li>
                <li><strong>Static Hosting</strong>: Codemagic also permits deploying to a static website, allowing use to view the app on iOS and android without downloading the app.</li>
            </ul>

            <h3>Inspiration and Legacy</h3>
            <p>
                This project is a testament to Ferguson's commitment to making a meaningful impact in their later years. By merging leadership training with writing, the app aspires to serve a greater purpose and encourage users to reflect on their roles in combating prejudice.
            </p>
        </>,
        link: 'https://github.com/anirac-tech/2024_black_tax_and_white_benefits',
        image: project1,
    },
    {
        id: '2',
        title: 'FaceBlur',
        excerpt: 'A face-blurring web app made with React, OpenCV, YuNet, and Python.',
        description: <>
            <h3>Overview</h3>
            <p>FaceBlur is an innovative face-blurring application that utilizes AI to protect privacy in photos. Before sharing images online, it's essential to consider the implications of revealing faces, especially those of individuals in the background. FaceBlur empowers users to take control of their images by automatically detecting and blurring faces.</p>
            <br /><p style={{ 'textAlign': 'center' }}>
                <LinkButton
                    href='https://faceblur-ai.vercel.app/'
                    target='_blank'
                    rel="noreferrer">
                    Check it out
                </LinkButton>
            </p>
            <h3>Features</h3>
            <ul>
                <li><strong>AI-Powered Face Detection</strong>: Automatically identifies faces in uploaded photos for easy processing.</li>
                <li><strong>Selective Blurring</strong>: Choose which faces to blur or leave unblurred, giving you complete control over your images.</li>
                <li><strong>Fast Processing</strong>: Receive your blurred photo in seconds, making it quick and convenient to share safely.</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img style={{ padding: '16px' }} src={project2x1} alt='Screenshot of web app.' />
            </div>
            <h3>Technologies Used</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Backend</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>Flask</li>
                        <li>YuNet</li>
                        <li>OpenCV</li>
                    </ul>

                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Frontend</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>React</li>
                        <li>Tailwind CSS</li>
                    </ul>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Deployment</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>Streamlit (originally)</li>
                        <li>Vercel</li>
                        <li>Railway</li>
                    </ul>
                </div>
            </div>
            <h3>Methodology</h3>
            <p>YuNet delivers astonishingly fast detection speeds for its level of accuracy,
                perfect for our use case. We use 70% confidence threshold, which seems to get
                most faces in an image, including slightly blurry or obscured faces.
                <br />
                The user uploads an image to the React application,
                which gets sent to the Flask API as an image file and saved temporarily on the
                server. OpenCV reads the image as bytes and passes them to the YuNet model.
                The model sends the detections back to the frontend as a list of rectangles.
                In the app, the user can choose to select/deselect face detections and apply
                a blur effect. The blur effect uses a simple Gaussian blur with the kernel window
                determined by the image size, so that small faces receive the same amount of blurring
                as large ones.</p>
            <h3>Future Plans</h3>
            <p>Future considerations for this project may increase the memory available to the backend
                and optimizing how images are handled, since the current hosting environment has severe
                limitations. We also consider adding support for videos.
            </p>
        </>,
        link: 'https://github.com/alexdivadi/faceblur',
        image: project2,
    },
    {
        id: '3',
        title: 'JourneyHub',
        excerpt: 'A Flutter app to connect those in need with local resources [Google Gemini Competition 2024].',
        description: <>
            <h3>Overview</h3>
            <p>
                <strong>JourneyHub</strong> is a mobile app built with Flutter. It is designed to help the homeless community
                find resources in their community, such as cooling centers and food. The app primarily uses RAG as well as
                the user's location to give the user up-to-date information about these resources.
            </p>
            <p style={{ 'textAlign': 'center' }}>
                <LinkButton
                    href='https://ministry-demos.web.app/'
                    target='_blank'
                    rel="noreferrer">
                    Try it out!
                </LinkButton>
            </p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Authentication</strong>: Login as a user or a provider, which lets you view different functions of the app.</li>
                <li><strong>AI Chatbot</strong>: Ask natural questions and get accurate, relevant information in response.</li>
                <li><strong>GPS Location</strong>: Automatically find a list of cooling centers near you using your location.</li>
            </ul>
            <h3>Technology</h3>
            <p>The app also makes use of a few key technologies:</p>
            <ul>
                <li><strong>Firebase Firestore</strong>: Documents can be retrieved for RAG using vecotr indexing provided by Firestore.</li>
                <li><strong>Firebase Web Hosting</strong>: Free hosting on the web makes it easy to share the app with testers.</li>
                <li><strong>Firebase Remote Config</strong>: Updates to cooling centers or general help information can be done in the Firebase console, without pushing updates.</li>
                <li><strong>Gemini</strong>: Using Google's Gemini LLM, a user can have conversational interactions with our app.</li>
            </ul>
        </>,
        link: 'https://github.com/anirac-tech/hha',
        image: project3,
    },
    {
        id: '4',
        title: 'ClimateAI',
        excerpt: 'A custom CNN for solar panel health detection.',
        description: <>
            <h3>Overview</h3>
            <p>Photovoltaic Cells (PV cells) are useful for gathering solar energy, one of the leading resources for clean power in the world.
                However, a multitude of factors can cause solar technology to lose efficiency.
                By the process of inspecting a panel's 'thermal signature', anomalies can be detected.
                This is a tedious, expensive process to do manually.
                Solar Cell Health AI attempts to automate this process with the power of deep learning.</p>
            <h3>Technologies Used</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Backend</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>Flask</li>
                        <li>Tensorflow</li>
                        <li>Keras</li>
                    </ul>

                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Frontend</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>HTML</li>
                        <li>CSS</li>
                    </ul>
                </div>
                <div style={{ flex: 1, textAlign: 'center' }}>
                    <h4>Deployment</h4>
                    <ul style={{ listStyleType: 'none', padding: '0px' }}>
                        <li>Heroku</li>
                    </ul>
                </div>
            </div>
            <h3>Dataset</h3>
            <p>The dataset comprises 19,903 observations of 40 x 24px grayscale infrared images of solar panels from Kaggle.
                There are 12 different labels among the images: Non-anomaly, Diode-Multi, Hot-Spot, Offline-Module,
                Diode, Cracking, Soiling, Shadowing, Cell-Multi, Vegetation, Hot-Spot-Multi, and Offline, as shown
                in the figure below.
                <br /><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ padding: '16px' }} src={project4x1} alt='Labeled images of solar panels.' />
                </div><br />
                About 50% of the dataset was labeled No-Anomaly. However, instead of performing a binary
                classification on the dataset, we opted to attempt multi-class classification across the 12 classes.
            </p>
            <h3>Training</h3>
            <p> The model constructed was a CNN with 9 layers. The training data was optimized on the CNN by
                using Stratified K-fold method with k=5.
                We used one-hot encoding for the 12 classes with a final softmax layer to determine the most
                likely classification. The model was trained in 8 epochs with a batch size of 32. Below is the layer
                structure of the model.
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ padding: '16px' }} src={project4x3} alt='Layer architecture of CNN.' />
                </div><br />
                Throughout the training and fine-tuning process, multiple model architectures were experimented with,
                including ResNet and a SVM approach.
                Ultimately, a DNN with fewer and smaller layers produced the best result for these small images.
            </p>
            <h3>Results</h3>
            <p>The final results varied per class, with an overall AUC score of about 0.915. Classes that performed well
                in classificaiton were Diode, Cracking, and No-Anomaly. Below is the ROC curve for No-Anomaly.
                <br /><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ padding: '16px' }} src={project4x2} alt='ROC curve for No-Anomaly class layer.' />
                </div><br />
                Overall, the model seemed to do a decent job at classifying certain anomalies in the solar panel dataset.
                However, some classes (such as Soiling) were seriously misrepresented by the model, in nature due to the lopsided distribution
                of the classes. With the given dataset, binary classification may be preferred and more useful to someone managing
                solar panels.
            </p>
        </>,
        link: 'https://github.com/alexdivadi/ClimateAI',
        image: project4,
    },
    {
        id: '5',
        title: 'WasteNot',
        excerpt: 'A food expiration tracker app built in Swift for iOS.',
        description: <>
            <h3>Overview</h3>
            <p>
                About
                Are you regularly buying food that goes bad? <strong>WasteNot</strong> will help you keep track of the products you buy or foods you make so that nothing gets wasted!
                Built with Swift, this app keeps a list of the Foods you've added to tell you when they're about to expire.
                <br /> This app was built as a capstone project for the iOS 101 Course offered by CodePath.
            </p>
            <h3>Key Features</h3>
            <ul>
                <li><strong>Food List</strong>: Add foods to your list from a set of common food types to see how long they are fresh.</li>
                <li><strong>Calendar View</strong>: See when foods are going to expire in a convenient Calendar view.</li>
                <li><strong>Notifications</strong>: Get a notification the day a food will go bad.</li>
            </ul>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img src="https://camo.githubusercontent.com/e5de299be3649ed6f625b51252d92353aeb3dc26cb53937116a8e9d88339ec76/68747470733a2f2f63646e2e6c6f6f6d2e636f6d2f73657373696f6e732f7468756d626e61696c732f65343465656235333739376534363335383666353039663237646232353962632d776974682d706c61792e676966"
                    data-canonical-src="https://cdn.loom.com/sessions/thumbnails/e44eeb53797e463586f509f27db259bc-with-play.gif"
                    style={{ maxWidth: "100%", display: "inline-block" }}
                    data-target="animated-image.originalImage"
                    alt='Loom GIF showing app features' />
            </div>
            <h3>Data Collection</h3>
            <p>
                Expiration times were gathered for many common foods using data from USDA's
                <a href='https://www.foodsafety.gov/keep-food-safe/foodkeeper-app'> FoodKeeper App</a>.
                The data was scraped from this website using a Selenium script written in Python. The entire
                dataset is stored in the project files as a list of JSON objects.
            </p>
            <h3>Technology</h3>
            <p>The app was designed with UIKit and storyboards inside XCode. Food lists are stored locally using
                UserDefaults.
            </p>

        </>,
        link: 'https://github.com/alexdivadi/wastenot',
        image: project5,
    },
];

export default projects;