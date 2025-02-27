import Image from "next/image";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const clinics = [
  {
    id: 1,
    name: "Medical & Dental Centre",
    gps: "3 GPs available",
    bulkBilling: true,
    location: "Surrey Hills",
    distance: "0.8 km",
    logo: "https://via.placeholder.com/40",
    position: [51.505, -0.09],
    days: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
  {
    id: 2,
    name: "Doctors Medical Centre",
    gps: "3 GPs available",
    bulkBilling: false,
    location: "Surrey Hills",
    distance: "1.2 km",
    logo: "https://via.placeholder.com/40",
    position: [51.515, -0.1],
    days: [20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
  },
];

const ClinicDetailsProfile = () => {
  return (
    <div className="flex items-start justify-between pb-4 border-b border-dashed">
      {" "}
      <div className="space-y-6">
        <div className="flex items-center gap-3">
          <Image
            src={"/images/service-img/clinic.png"}
            alt={"clinic.name"}
            width={60}
            height={60}
            className="w-[60px] h-[60px] rounded-full object-contain"
          />
          <div className="space-y-2">
            <h3 className="font-semibold text-2xl">{"Medical & Dental Centre"}</h3>
            <div className="flex items-center gap-2 ">
              <p className="text-sm text-gray-600">{"GPs available"}</p>
              <div className="text-sm text-gray-600 flex items-center gap-2">
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker size={18} />
                  <p>{"Surrey Hills"}</p>
                </div>
                <div className="flex items-center gap-2">
                  <HiOutlineLocationMarker size={18} />
                  <p> {"0.8 km"}</p>
                </div>
              </div>
              <p className="text-sm text-gray-600">{"Bulk billing"}</p>
            </div>
          </div>
        </div>
        <div className="max-w-[600px] bg-gray-100 rounded-[16px] p-4">
          <p className="font-semibold">About us</p>

          <p className="text-sm mt-3">
            The doctors are all Fellows of the Royal Australian College of GP's. are AHPRA and AGPAL accredited.The full
            fee must be paid on th...See more
          </p>
        </div>
      </div>
      <div className="w-[281px] h-[191px] rounded-[34px]">
        <MapContainer
          style={{ borderRadius: "34px !important" }}
          center={[51.505, -0.09]}
          zoom={13}
          className="h-full w-full rounded-[34px]"
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          {clinics.map((clinic) => (
            <Marker key={clinic.id} position={clinic.position}>
              <Popup>{clinic.name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default ClinicDetailsProfile;
