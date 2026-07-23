import CareSubHero from '@/components/patientcare/CareSubHero';
import PreCare from '@/components/patientcare/PreCare';

export default function PreCarePage() {
  return (
    <>
      <CareSubHero
        tag="BEFORE YOUR SESSION"
        title="Before your session"
        intro="A little preparation goes a long way. Follow these guidelines to protect your skin, maximize your results, and keep your appointment on schedule."
      />
      <PreCare />
    </>
  );
}