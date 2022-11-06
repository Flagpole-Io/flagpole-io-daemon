import getFlagStatus from './get-flag-status';
import flagPoleSdk from '../flagpole/flagpole-sdk';

const flagStatusJob = async () => {
  const halfStaffEvents = await getFlagStatus();
  const today = new Date();
  const shouldHalfStaff = halfStaffEvents.some(
    ({ start, end }) => today >= start && today <= end,
  );
  const { configuration } = await flagPoleSdk.getConfiguration();

  if (configuration?.hasMotor && shouldHalfStaff) {
    await flagPoleSdk.addRequest({ input: { action: 'HALF' } });
  }
};

export default flagStatusJob;
