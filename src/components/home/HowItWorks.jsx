import ProcessBreakdown from '@/components/howitworks/ProcessBreakdown';
import LaserSystem from '@/components/howitworks/LaserSystem';
import PrecisionProtection from '@/components/howitworks/PrecisionProtection';
import ComparisonTable from '@/components/howitworks/ComparisonTable';
import ComfortSection from '@/components/howitworks/ComfortSection';
import SessionExpect from '@/components/howitworks/SessionExpect';
import FinalCTA from '@/components/howitworks/FinalCTA';

export default function HowItWorks() {
  return (
    <>
      <ProcessBreakdown />
      <LaserSystem />
      <PrecisionProtection />
      <ComparisonTable />
      <ComfortSection />
      <SessionExpect />
      <FinalCTA />
    </>
  );
}