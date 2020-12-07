
import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Image from 'react-bootstrap/Image';

import test_img from './imgs/test.jpg';
import glow_bottle_img from './imgs/bottle.jpg';
import cad_img from './imgs/cad.png';
import camera_img from './imgs/camera.png';
import lid_img from './imgs/lid_only.png';
import whole_bottle_img from './imgs/whole_bottle.png';
import candy_img from './imgs/candy.png';
import inertial_img from './imgs/inertial+legend.png';
import sam_img from './imgs/sam.png';
import yolo_img from './imgs/yolo.png';
import overlap_img from './imgs/overlap_shortest.png';
import conf_img from './imgs/conf.png';
import integration1_img from './imgs/integreation1.png';
import integration2_img from './imgs/integreation2.png';

import './css/App.css';

class App extends Component{

  render(){

    return (
      <div className="background">
          <div style={{display:"flex", alignItems:"center", flexWrap:"wrap"}}>
            <div className="my-container" style={{marginTop:"150px"}}>
              <p className="title">
                Multimodal Sensing for Tracking Medication Adherence
              </p>
              <p className="sub-title">
                Final Term Project for EE 382V - Activity Sensing and Recognition
              </p>
              <p className="sub-title" style={{fontStyle:'italic'}}>
                Corey Karnei, Connor Fritz
              </p>
            </div>

          <div className="my-container">
            <p className="sub-heading">Motivation</p>
            <p className="txt">
            Estimates from the World Health Organization indicate that patients in developed countries only
            take about 50% of prescribed medicine for chronic diseases like hypertension and diabetes. Although
            seniors are the largest consumers of healthcare resources, studies indicate that as many as 55% of them do
            not properly take their medications and up to 30% of all hospital readmissions are due to medication
            non-adherence <a href="#ref1" id="ref1b">[1]</a>. Not only is this non-adherence damaging the health of the individuals it affects, in
            many cases it can be life threatening. It’s reported that as many as 125,000 people die every year due to
            failure to take their prescription medication <a href="#ref2" id="ref2b">[2]</a>. Additionally, in patients that suffer from chronic mental
            illness medication non-adherence rates can be as high as 40-50%. Unlike senior citizens, medication
            non-adherence in chronically mentally ill patients is often conscious and not due to forgetfulness.
            Medication non-adherence in these patients can lead to hospitalizations, self-harm, violence or suicide <a href="#ref3" id="ref3b">[3]</a>.
            </p>
            <br></br>
            <br></br>
            <p className="txt">
            Because medication non-adherence can cause financial and social harm, it would be beneficial for
            both physicians and patients to be able to track and detect instances of medication adherence, and by
            extension, non-adherence. Furthermore, a system for detecting medication adherence would have to be
            both mobile and robust for instances in which a patient tries to ‘trick’ the system. Our project aims to
            provide a proof-of-concept in which both camera and inertial data is used to distinguish pill taking
            behaviors. Future works could extend this system to obscure the cameras and inertial sensors while also
            taking steps to eliminate privacy concerns - thus providing a mobile system that is more difficult to ‘trick’
            than the smart pill bottles currently on the market.
            </p>



          </div>

          <div className="my-container">
            <p className="sub-heading"> Prior Work </p>
            <p className="txt">
            A significant body of research has been conducted to improve adherence to prescription
            medications through various interventions. Several researchers have attempted to detect pill-taking
            gestures using wrist-mounted inertial sensors <a href="#ref4" id="ref4b">[4]</a><a href="#ref5" id="ref5b">[5]</a>. One group equipped a pill bottle with an inertial
            sensor to classify activities <a href="#ref6" id="ref6b">[6]</a>. Others have embedded pill bottle lids with sensors that detect whether the
            container is open or not <a href="#ref7" id="ref7b">[7]</a><a href="#ref8" id="ref8b">[8]</a>. One approach involved RFID chips on pill bottles to detect if the bottle is
            taken from a medicine cabinet combined with face detection and tracking from a stationary camera <a href="#ref9" id="ref9b">[9]</a>.
            Many of these papers tried to increase adherence by reminding the user when they fail to take their
            medication. We aim to develop a system that could be applicable for senior citizens as well as mentally ill
            patients who don’t take their medicine by choice rather than by accident. We believe that our approach is
            novel due to the combination of inertial and video sensing, and because the cameras are able to move with
            the bottle.

            </p>

            <Image src={glow_bottle_img} className="img" rounded />
            <p className="fig-description">Fig1. Existing Smart Bottle Prototype </p>

          </div>

          <div className="my-container">
            <p className="sub-heading">Procedure</p>
            <p className="txt">
            Our plan was to build a system for tracking medication intake behavior using a combination of inertial
            sensing and computer vision. To this end, we employed an inertial sensor to classify what action was
            being performed to the pill bottle, an internal camera that would serve to indicate
            that the bottle cap had been removed, and external cameras that would recognize that
            a pill-taking motion had happened. In combination, these would be able to give a
            hysician a good sense as to whether a patient had taken a pill or not.
            </p>
            <br></br>
            <br></br>
            <p className="txt">
            We 3-d modeled and printed a piece that would attach to the pill bottle’s cap, and could
            house 4 cameras facing in each direction.
            </p>
            <Image src={cad_img} className="img" rounded />
            <p className="txt">
            We employed several miniature
            nanny-cams purchased online for this very purpose.
            </p>
            <Image src={camera_img} className="img" rounded />
            <p className="txt">
             We also used a cell phone
            running the app sensorlog to capture inertial data, which was attached to the bottom
            of the bottle. The internal camera, as described before, was affixed to the underside of the bottle cap.
            </p>
            <Image src={lid_img} className="img" rounded />
            <p className="txt">
            Here is the final design, with the cameras affixed to the mount and the phone attached:
            </p>
            <Image src={whole_bottle_img} className="img" rounded />
            <br></br>
            <br></br>
            <hr></hr>
            <br></br>

            <p className="txt">
            A total of 5 particpants were recruited to gether data for this project. Each participant was presented
            with a script that detailed specific actions for the participants to make sequentially. They were instructed to
            repeat the steps of the script 10 times, taking one pill each time for a total of 50 pill-taking moments. All participants
            completed their tasks on the same day and in the same location. Each person was also filmed with a smartphone while they
            performed the tasks for the purposes gathering the 'true labels' for each model.
            </p>
          </div>

          <div className="my-container">
            <p className="sub-heading"> Results </p>
            <p className="txt">
              As previously stated, three different models were employed; one for the internal camera, one for the inertial sensor,
              and one for the external cameras. Each will be described in more detail here.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p className="sub-sub-heading"> Internal Camera - Model 1 </p>
            <p className="txt">
              To detect whether the the pill bottle cap had been removed, we
              trained a simple convolutional neural network on the footage from the
              internal camera. Within the CNN, the RELU activtion function was used. All
              images from the camera were scaled to 64x64 pixels and were
              grayscaled to increase speed. Image augmentations were
              also perfomed via brightening/darkening or vertcial flipping to increase the size of the
              data set and the accuracy of the model. Below you see an example image from the internal
              camera.
            </p>
            <Image src={candy_img} className="img" rounded />
            <p className="txt">
            This method gave us pretty good results, achieving 91% accuracy on just the
            raw image set, and 94% when the augmented images were added. In retrospect,
            this seems like a wasteful way to detect whether the bottle is opened or not.
             A switch would likely have given comparable accuracy while being smaller,
             cheaper, and less battery intensive.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p className="sub-sub-heading"> Inertial Sensor - Model 2 </p>
            <p className="txt">
            For the inertial sensor, we extract 4 features from each dimension of movement.
            Mean, variance, skew, and kurtosis. We then used a Random Forest Classifier
            to determine what activity was being picked performed. On the right you can
            see a snippet of the data, containing 4 pill-taking moments. The true labels
            were created manually after watching the smartphone video recorded separately.
            In each pill-taking, you can see it go from stationary to picking up to getting pill
            to putting down.
            </p>
            <Image src={inertial_img} className="img" rounded />
            <p className="txt">
            We reached 95% accuracy when trained on a random split,
            and 85% when leaving one participant out. These results are reasonable,
            and since most pill bottles spend most of the time in one spot, it is
            very unlikely that a pill-taking moment would be entirely missed by this model.
            </p>
            <br></br>
            <hr></hr>
            <br></br>
            <p className="sub-sub-heading"> External Cameras - Model 3 </p>
            <p className="txt">
              To detect when a pill has been taken, we made use of an existing
              system, YOLO v3 <a href="#ref10" id="ref10b">[10]</a>.
            </p>
            <Image src={yolo_img} className="img_stable" rounded />
            <p className="txt">
              You only look once (YOLO) is a state-of-the-art, real-time
              object detection system. It is able to detect many different
              objects at once, and will provide bounding boxes wherever it
              detects each object. The default version of this tool is trained on dogs, cats,
              horses, planes, and 16 other classes. But since none of these were hands
              or faces, we sought out databases for these classes individually and trained our
              own version of YOLO to detect them both. We used the Oxford Hands Dataset and the
              WIDER Faces Dataset.
            </p>
            <Image src={sam_img} className="img" rounded />
            <p className="txt">
            After training yolo to detect faces and hands, we ran the external
            camera videos throu our newly trained model. In cases where the
            bounding box of a hand overlapped with the bounding box of a face,
            we considered this to be a pill-taking moment. Below you a snippet of one pill-taking moment
            broken down into its frames. On the top row in red, you have the frames where our
            model detected a hand. On the bottom in blue, you have the frames where our model detected
            a face. In the middle in green, you have the frames where they overlap along
            with an X that makes the true moment a pill was taken.
            </p>
            <Image src={overlap_img} className="img" rounded />
            <p className="txt">
            Accuracy for this model was ~80%. Some of the pill taking moments were only partially in frame
            and we believe this caused the accuracy to be lower than it could have been.
            </p>
          </div>

          <div className="my-container">
            <p className="sub-heading"> Integration </p>
            <p className="txt">
            Since this project was motivated by the desire to allow physicians to know how well their
            patients are taking their medicine, we have proposed a system for integrating these separate
            models. When given data for a period of time, say a day, each model would perform its evaluation
            independently and return a boolean indicating whether or not that model believes a pill was
            taken. These booleans could then be summed and sent to the patient’s doctor, acting as a sort of score
            denoting how confident the system is that a pill was taken.
            </p>
            <Image src={integration1_img} className="img" rounded />
            <p className="txt">
            In such a system, the doctor would be able to look at a dashboard like the one you see here.
            </p>
            <Image src={integration2_img} className="img" rounded />
            <p className="txt">
            Across time, the doctor would be able to get a decent understanding of how well the
            patient has been adhering to their medication and could intervene if they see results like
            in the bottom figure. Combining the predictions in this way makes the system more robust, as
            even if one of the models is wrong on a given day, across all 3 models and across multiple days
            the trend should still be clear.
            </p>
          </div>
          <div className="my-container">
            <p className="sub-heading"> Limitations and Future Work </p>
            <p className="txt">
              This work had several limiatations, most of which would be easily addressed in
              future work on this topic.
              </p>
              <br></br>
              <p className="txt">
              The first is the disconnectedness of the sensors. Each sensor was its own device
              and the fact that each one started collecting data at a slightly different time made it much more difficult to
              try and actually implement an integrated system like the one described. Additionally, having to consolidate
              the data from 6 different devices made scaling up our data collection somewhat impractical. In the future,
              we would consolidate the sensors to one device, perhaps using a microcontroller, which would allow us to activate
              all the sensors at once and store the data in one location.
              </p>
              <br></br>
              <p className="txt">
              The second limitation was the limited field of view.
              Although we positioned the external cameras in all four directions, there was still a few degrees between any two cameras that
              was a blind spot. A fisheye lens could possibly be employed to solve this issue.
              </p>
              <br></br>
              <p className="txt">
              A final limitation pertains to privacy. Two of
              our models used cameras to capture data,
              but cameras come with a litany of privacy concerns that our work did nothing to address. To remedy this,
              an infrared camera could be used instead.
              </p>
              <br></br>
              <p className="txt">
              If we were to extend this work further, we would actually create the system that consolidates
              the models' output into a adherence confidence score and flesh out
              and develop the physician portal proposed.
            </p>
          </div>

          <div className="my-container">
            <p className="sub-heading"> Conclusion </p>
            <p className="txt">
              In this report we described a novel, multimodal approach for Tracking Medication Adherence. Using
              a combination of inertial and visual sensors and integrating them in sdsdasd as..s.a.d.ad im running
              out of gas.
            </p>
          </div>

          <div className="my-container" style={{marginBottom:"0px"}}>
            <p className="sub-heading"> References </p>
            <p className="reference" id="ref1">
              <a href="#ref1b">[1]</a> “Medipense " Top 10 Reasons Seniors Do Not Take Their Medications.” Medipense, 9 May
                  2018, medipense.com/en/top-10-reasons-seniors-do-not-take-their-medications/.
            </p>
            <p className="reference" id="ref2">
              <a href="#ref2b">[2]</a> Benjamin, Regina M. “Medication Adherence: Helping Patients Take Their Medicines as
                  Directed.” Public Health Reports, vol. 127, no. 1, 2012, pp. 2–3.,
                  doi:10.1177/003335491212700102.
            </p>
            <p className="reference" id="ref3">
              <a href="#ref3b">[3]</a> Acar, Gulsah, et al. “Medication Non-Adherence in Chronic Mental Illness: Management
                  Strategies” ARC Journal of Psychiatry, vol. 2, no. 1, 2017, pp. 23-25.
            </p>
            <p className="reference" id="ref4">
              <a href="#ref4b">[4]</a> Marquard, Jenna L, et al. “Designing a Wrist-Worn Sensor to Improve Medication Adherence:
              Accommodating Diverse User Behaviors and Technology Preferences.” JAMIA Open, vol. 1, no.
              2, 2018, pp. 153–158., doi:10.1093/jamiaopen/ooy035.
            </p>

            <p className="reference" id="ref5">
              <a href="#ref5b">[5]</a> Kalantarian, Haik, et al. “A Smartwatch-Based Medication Adherence System.” 2015 IEEE 12th
              International Conference on Wearable and Implantable Body Sensor Networks (BSN), 2015,
              doi:10.1109/bsn.2015.7299348.
            </p>

            <p className="reference" id="ref6">
              <a href="#ref6b">[6]</a> Aldeer, Murtadha, et al. “A Sensing-Based Framework for Medication Compliance Monitoring.”
              Proceedings of the 1st ACM International Workshop on Device-Free Human Sensing - DFHS'19,
              2019, doi:10.1145/3360773.3360886.
            </p>

            <p className="reference" id="ref7">
              <a href="#ref7b">[7]</a> Reese, Peter P., et al. “Automated Reminders and Physician Notification to Promote
              Immunosuppression Adherence Among Kidney Transplant Recipients: A Randomized Trial.”
              American Journal of Kidney Diseases, W.B. Saunders, 7 Dec. 2016,
              www.sciencedirect.com/science/article/pii/S0272638616305972.
            </p>

            <p className="reference" id="ref8">
              <a href="#ref8b">[8]</a> Shellmer, Diana A., and Nataliya Zelikovsky. “The Challenges of Using Medication Event
              Monitoring Technology with Pediatric Transplant Patients.” Pediatric Transplantation, vol. 11,
              no. 4, 2007, pp. 422–428., doi:10.1111/j.1399-3046.2007.00681.x.
            </p>

            <p className="reference" id="ref9">
              <a href="#ref9b">[9]</a> Hasanuzzaman, Faiz M., et al. “Monitoring Activity of Taking Medicine by Incorporating RFID
              and Video Analysis.” Network Modeling Analysis in Health Informatics and Bioinformatics, vol.
              2, no. 2, 2013, pp. 61–70., doi:10.1007/s13721-013-0025-y.
            </p>

            <p className="reference" id="ref10">
              <a href="#ref10b">[10]</a> <a href="https://pjreddie.com/darknet/yolo/">https://pjreddie.com/darknet/yolo/</a>
            </p>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
