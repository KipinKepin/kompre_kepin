const CustomerInformation = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6 md:p-8">
      <h3 className="text-lg font-semibold mb-6">Customer Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-6">
        {/* Email */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Email</span>
          <span className="font-medium text-gray-900">customer1@bank.com</span>
        </div>

        {/* Phone */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Phone</span>
          <span className="font-medium text-gray-900">(026) 880-8741</span>
        </div>

        {/* Occupation */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Occupation</span>
          <span className="font-medium text-gray-900">Wiraswasta</span>
        </div>

        {/* Account Type */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Account Type</span>

          <span
            className="
            inline-flex w-fit items-center
            rounded-full bg-black px-3 py-1
            text-xs font-semibold text-white
          "
          >
            Gold
          </span>
        </div>

        {/* Gender */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Gender</span>
          <span className="font-medium text-gray-900">Female</span>
        </div>

        {/* Date of Birth */}
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Date of Birth</span>
          <span className="font-medium text-gray-900">2001-10-31</span>
        </div>
      </div>
    </div>
  );
};

export default CustomerInformation;
