import { Helmet } from "react-helmet";

const HelmetComponent = ({ title,canonical }) => {
    return (
        <Helmet>
            <title>{title}</title>
            <meta name="keywords" content="ICISCM, International Conference on Intelligent Systems and Computational Methods  ,Intelligent Systems, Computational Methods, Artificial Intelligence, Machine Learning, Data Science, Smart Algorithms, Computational Intelligence, Optimization Techniques, Neural Networks, Deep Learning, Intelligent Computing, Pattern Recognition, Scientific Computing, High-Performance Computing, Computational Modeling, Intelligent Automation, Emerging Technologies, International Conference 2025, Computational Research, Advanced Computing" />
            <meta name="description" content="The International Conference on Intelligent Systems and Computational Methods 2025 brings together researchers, scholars, and professionals to explore innovations in AI, machine learning, optimization, and advanced computational techniques." />
            <meta name="author" content="ICISCM Editorial Team" />
            <meta name="robots" content="index, follow" />

            <meta property="og:type" content="website" />
            <meta property="og:title" content="International Conference on Intelligent Systems and Computational Methods" />
            <meta property="og:description" content="The International Conference on Intelligent Systems and Computational Methods 2025 brings together researchers, scholars, and professionals to explore innovations in AI, machine learning, optimization, and advanced computational techniques." />
            <meta property="og:url" content="https://iciscm.com/" />
            <meta property="og:image" content="https://iciscm.com/assets/Images/ICISCM.png" />

            <link rel="canonical" href={canonical} />
            <link rel="icon" type="image/png" href="https://iciscm.com/assets/Images/ICISCM fav.png" />

        </Helmet>
    );
}; 

export default HelmetComponent;          