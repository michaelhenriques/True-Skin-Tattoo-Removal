import CareSubHero from '@/components/patientcare/CareSubHero';
import PostCare from '@/components/patientcare/PostCare';

export default function PostCarePage() {
  return (
    <>
      <CareSubHero
        tag="AFTER YOUR SESSION"
        title="After your session"
        intro="How you care for your skin in the hours and days after treatment directly impacts your healing and your results. Follow these guidelines after every session."
      />
      <PostCare />
    </>
  );
}