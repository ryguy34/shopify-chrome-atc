import { Address } from "../pages/profile/AddressForm";
import { ProfileAndPaymentInfo } from "../pages/profile/ProfileAndPaymentInfoForm";

export default interface IProfile {
	id?: string;
	profileAndPaymentInfo?: ProfileAndPaymentInfo;
	shippingInfo?: Address;
	billingInfo?: Address;
}
