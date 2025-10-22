import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homes from "../Components/Homes";
import Abouts from "../Components/Abouts";
import Main from "../Main/Main";
import AimScopePage from "../Components/AimScopePage/AimScopePage";
import GuidelinePage from "../Components/AuthorGuidelinePage/GuidelinePage";
import PeerPage from "../Components/PeerReviewPage/PeerPage";
import PublicationPage from "../Components/PublicationPage/PublicationPage";
import AbstractingPage from "../Components/AbstractingPage/AbstractingPage";
import ArticlePage from "../Components/ArticleProcessPage/ArticlePage";
import PlagiarismPage from "../Components/PlagiarismPage/PlagiarismPage";
import MalPracticePage from "../Components/MalPracticePage/MalPracticePage";
import CorrectionPage from "../Components/CorrectionPage/CorrectionPage";
import PublicRightsPage from "../Components/PublicRightsPage/PublicRightsPage";
import ScrollToTop from "./ScrollToTop";
import ContactPage from "../Components/ContactPage/ContactPage";
import EditorialPage from "../Components/EditorialPage/EditorialPage";
import IssuePage from "../Components/IssuePage/IssuePage";
import Statisticspage from "../Components/Statisticspage/Statisticspage";
import Callforpaperpage from "../Components/Callforpaperpage/Callforpaperpage";
import Proceeding2025page from "../Components/Proceedingpage/Proceeding2025page";
import ICISCM2024page from "../Components/ICISCM2024page/ICISCM2024page";


function Approuter() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route element={<Main />}>
            <Route path="/" element={<Homes />} />
            <Route path="/about" element={<Abouts />} />
            <Route path="/scope" element={<AimScopePage />} />
            <Route path="/organizing-committee" element={<EditorialPage />} />
            {/* <Route path="/editorial-board" element={<IssuePage />} /> */}
            <Route path="/paper-submission" element={<AbstractingPage />} />
            <Route path="/conference-tracks" element={<PeerPage />} />
            <Route path="/key-dates" element={<PublicationPage />} />
            <Route path="/conference-statistics" element={<Statisticspage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/call-for-paper" element={<Callforpaperpage />} />
            <Route path="/conference-proceedings" element={<Proceeding2025page />} />
            <Route path="/iciscm-2024" element={<ICISCM2024page />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Approuter;
