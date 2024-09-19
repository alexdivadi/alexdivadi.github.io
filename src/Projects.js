import project1 from './assets/images/project1.png';
import project2 from './assets/images/project2.png';

const projects = [
    {
        id: '1',
        title: 'Black Tax and White Benefits',
        excerpt: 'A Flutter version of a Wordpress Blog on systemic racism.',
        description: <>
            <h3>Overview</h3>
            <p>
                The <strong>Black Tax and White Benefits</strong> app is a Flutter-based application designed to address issues of racism and prejudice through insightful content and community engagement. Utilizing modern technologies such as Riverpod, Drift, Retrofit, Firebase Analytics, and Freezed, this app aims to facilitate discussions and provide resources related to social justice.
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

            <h3>Inspiration and Legacy</h3>
            <p>
                This project is a testament to the Ferguson's commitment to making a meaningful impact in their later years. By merging leadership training with writing, the app aspires to serve a greater purpose and encourage users to reflect on their roles in combating prejudice.
            </p>

            <p style={{ 'textAlign': 'center' }}>
                You can install the app from the <a
                    href='https://play.google.com/store/apps/details?id=com.blacktaxandwhitebenefits.gfapp&hl=en&pli=1'>
                    Google Play Store
                </a>
            </p>
        </>,
        link: 'https://github.com/anirac-tech/2024_black_tax_and_white_benefits',
        image: project1,
    },
    {
        id: '2',
        title: 'FaceBlur',
        excerpt: 'A face-blurring app made with React, OpenCV, and Python',
        description: <><h3>Overview</h3><p>FaceBlur is an innovative face-blurring application that utilizes AI technology to protect your privacy in photos. Before sharing images online, it's essential to consider the implications of revealing faces, especially those of individuals in the background. FaceBlur empowers users to take control of their images by automatically detecting and blurring faces.</p><h3>Features</h3><ul>
            <li><strong>AI-Powered Face Detection</strong>: Automatically identifies faces in uploaded photos for easy processing.</li>
            <li><strong>Selective Blurring</strong>: Choose which faces to blur or leave unblurred, giving you complete control over your images.</li>
            <li><strong>Fast Processing</strong>: Receive your blurred photo in seconds, making it quick and convenient to share safely.</li>
        </ul><p style={{ 'textAlign': 'center' }}><a
            href='https://faceblur-ai.vercel.app/'>
            Check it out
        </a></p>
            <h3>Technologies Used</h3><h4>Backend:</h4><ul>
                <li>Flask</li>
                <li>YuNet</li>
                <li>OpenCV</li>
            </ul><h4>Frontend:</h4><ul>
                <li>React</li>
                <li>Tailwind CSS</li>
            </ul><h4>Deployment:</h4><ul>
                <li>Vercel</li>
                <li>Railway</li>
            </ul></>
        ,
        link: 'https://github.com/alexdivadi/faceblur',
        image: project2,
    },
];

export default projects;