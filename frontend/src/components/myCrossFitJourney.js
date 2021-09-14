import React from "react"
import styled from "styled-components"

import Counter from "./counter"
import SectionTitle from "./sectionTitle"

const MyCrossFitJourneyStyled = styled.section`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1440px;
    padding: 32px;
    background-color: #333;
    color: #fff;
    box-sizing: border-box;

    p {
        font-size: 0.875rem;
        line-height: 1.25rem;
        margin-top: 16px;
    }
`

export default function myCrossFitJourney({ className }) {
    return (
        <MyCrossFitJourneyStyled className={className}>
            <SectionTitle isInverted={true} title="My CrossFit Journey" />
            <p>
                I grew up playing sports and all through high school played
                basketball, volleyball and softball. My freshman year of college
                during a rec league basketball game I tore my ACL and medial
                meniscus. Rehab for that accident was around a year and a half.
                I was a good patient and did all that was asked of me from
                doctors. I was released to play sports and two weeks later I was
                playing soccer, stepped in a hole and tore my medial meniscus
                again. Long story short I put on a lot of weight as my physical
                activity drastically declined but my appetite drastically grew.
                At one point I “started” CrossFit and after the second WOD
                (workout of the day) I walked out into the parking lot and threw
                up. I wanted nothing to do with exercise that was going to cause
                me to vomit after finishing so I quit.{" "}
            </p>
            <p>
                Several years later my brother-in-law started coaching at our
                local box and I thought I’d give it another go because I was in
                terrible shape and needed to do something. Before I continue I
                should mention that I have a history of motion sickness that is
                rather severe. I decided to go to a WOD with where my
                brother-in-law was coaching. I’ll never forget it what happened
                as long as I live. We started the warm up by running a few
                lengths of the alley next to the gym and then came in and did
                some stretching movements across the floor. At this point I was
                already winded from being in such bad physical shape. Jamison,
                my brother-in-law, started working with me on my deadlift
                mechanics and during the several reps of learning the proper
                mechanics of deadlifting I told my brother-in-law, “Jamison,
                I’ve got to stop the darkness is closing in on me.” Yes, I was
                about to pass out. I stopped and left. After those two pretty
                miserable experiences I completely wrote off CrossFit as a
                possibility for my journey to wellness.{" "}
            </p>
            <p>
                Fast forward several years to 2020 and my health was even worse.
                I was beginning to really feel my physical body breaking down
                and decaying in so many ways. At this point Jamison had started
                his own CrossFit gym. Jamison had also been on staff at a church
                and recently made a decision to pursue other avenues of
                employment and owning his own businesses. Additionally, he and
                his wife Lesley transitioned to coming to the church that the
                rest of his family and I attend. He somewhat jokingly (still not
                sure how much of a joke it was) sent out a text message to the
                family saying that if four family members would join the gym, he
                and Lesley would officially become members at the church. I
                talked to Jamison a bit and expressed my desire to give it
                another shot but that I was VERY concerned about my motion
                sickness issues. He expressed to me that all of the coaches were
                really great and would work with me and modify any movements
                that made me sick.{" "}
            </p>
            <p>
                I started at the Mossy Creek Fitness in Jefferson City, TN on
                December 28th, 2020 at just over 255 lbs. It was a 4:30pm class
                and the WOD was 3 rounds of 500m ski, 50 wall balls and 10 cal
                bike. Looking back my notes say they massively modified the
                workout for me and that I made it through the first round and
                almost passed out but I went back the next day and the day after
                that and the day after that and I haven’t missed a workout on a
                single weekday when I’ve been in town.
            </p>
            <p>
                I’m currently down 20+ pounds, up 3 pounds of muscle, down 6.5%
                body fat and have decreased my visceral fat level by 5 points.
            </p>
            <p>
                I’ve seen big wins in my ability to finish workouts, do skills
                that I never thought possible and lift weights that seemed
                extremely out of reach.
            </p>
            <p>
                I am so thankful to all of the amazing coaches as Mossy Creek
                Fitness for all of their support and encouragement. They never
                once made me feel like I was less than anyone else in the gym.
                I’ve built incredible relationship with many of my coaches as
                well as many of my fellow gym members. Finding a gym that is
                interested in the whole person and not just their money has been
                a gift that I was not even expecting to be given. Mossy Creek
                Fitness is more than a gym, it’s a family of happy and hungry
                people who empower one another to move forward.
            </p>
            <Counter />
        </MyCrossFitJourneyStyled>
    )
}
