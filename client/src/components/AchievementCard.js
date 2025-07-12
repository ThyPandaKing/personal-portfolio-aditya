import AchievementCardBig from "./AchivementCardBig";
import AchievementCardSmall from "./AchievementCardSmall";

export default function AchievementCard({ achievement, index }) {
  return (
    <>
      {window.innerWidth > 768 ? (
        <AchievementCardBig achievement={achievement} index={index} />
      ) : (
        <AchievementCardSmall achievement={achievement} index={index} />
      )}
    </>
  );
}
