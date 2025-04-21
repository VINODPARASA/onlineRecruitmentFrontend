// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

// const JobApplicationChart = () => {
//   const [data, setData] = useState([]);

// //   useEffect(() => {
// //     axios.get('http://localhost:5172/api/reports/application-status-summary')
// //       .then(response => {
// //         setData(response.data);
// //       })
// //       .catch(error => {
// //         console.error("Error fetching application status summary", error);
// //       });
// //   }, []);

// useEffect(() => {
//     axios.get('http://localhost:5172/api/reports/application-status-summary')
//       .then(response => {
//         console.log("Chart data:", response.data); // 👈 log here
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error("Error fetching application status summary", error);
//       });
//   }, []);
  
//   return (
//     <div className="p-4 bg-white rounded-xl shadow-md">
//       <h2 className="text-xl font-semibold mb-4 text-center">Job Application Status Summary</h2>
//       <ResponsiveContainer width="100%" height={400}>
//         <BarChart data={data} margin={{ top: 10, right: 30, left: 20, bottom: 10 }}>
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis dataKey="jobTitle" />
//           <YAxis />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="ShortlistedCount" fill="#8884d8" name="Shortlisted" />
//           <Bar dataKey="RejectedCount" fill="#ff7f7f" name="Rejected" />
//           <Bar dataKey="ScheduledCount" fill="#82ca9d" name="Interview Scheduled" />
//           <Bar dataKey="ReceivedCount" fill="#ffd700" name="Received" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default JobApplicationChart;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const JobApplicationChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5172/api/reports/application-status-summary')
//       .then((response) => {
//         console.log('Chart data:', response.data);
//         setData(response.data);
//       })
//       .catch((error) => {
//         console.error('Error fetching application status summary', error);
//       });
//   }, []);

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '500px',
//         padding: '20px',
//         background: '#ffffff',
//         borderRadius: '12px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         margin: '20px auto',
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           fontSize: '24px',
//           color: '#333',
//         }}
//       >
//         Job Application Status Summary
//       </h2>
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             dataKey="jobTitle"
//             angle={-25}
//             textAnchor="end"
//             interval={0}
//             height={80}
//           />
//           <YAxis
//             label={{
//               value: 'Application Count',
//               angle: -90,
//               position: 'insideLeft',
//               style: { textAnchor: 'middle' },
//             }}
//           />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="shortlistedCount" fill="#8884d8" name="Shortlisted" />
//           <Bar dataKey="rejectedCount" fill="#ff7f7f" name="Rejected" />
//           <Bar dataKey="scheduledCount" fill="#82ca9d" name="Interview Scheduled" />
//           <Bar dataKey="receivedCount" fill="#ffd700" name="Received" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default JobApplicationChart;
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const JobApplicationChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5172/api/reports/application-status-summary')
//       .then((response) => {
//         const transformedData = response.data.map((job) => {
//           const yetToReview = job.totalApplications - job.rejectedCount - job.scheduledCount;
//           return {
//             jobTitle: job.jobTitle,
//             totalApplications: job.totalApplications,
//             rejectedCount: job.rejectedCount,
//             scheduledCount: job.scheduledCount,
//             yetToReview: yetToReview < 0 ? 0 : yetToReview, // safety check
//           };
//         });
//         setData(transformedData);
//       })
//       .catch((error) => {
//         console.error('Error fetching application status summary', error);
//       });
//   }, []);

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '500px',
//         padding: '20px',
//         background: '#ffffff',
//         borderRadius: '12px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         margin: '20px auto',
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           fontSize: '24px',
//           color: '#333',
//         }}
//       >
//         Job Application Status Summary
//       </h2>
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
//         >
//           <CartesianGrid strokeDasharray="3 3" />
//           <XAxis
//             dataKey="jobTitle"
//             angle={-25}
//             textAnchor="end"
//             interval={0}
//             height={80}
//           />
//           <YAxis
//             label={{
//               value: 'Application Count',
//               angle: -90,
//               position: 'insideLeft',
//               style: { textAnchor: 'middle' },
//             }}
//           />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalApplications" fill="#007bff" name="Total Applications" />
//           <Bar dataKey="rejectedCount" fill="#ff7f7f" name="Rejected" />
//           <Bar dataKey="scheduledCount" fill="#82ca9d" name="Interview Scheduled" />
//           <Bar dataKey="yetToReview" fill="#f0ad4e" name="Yet To Review" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default JobApplicationChart;

// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import {
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   Legend,
//   ResponsiveContainer,
// } from 'recharts';

// const JobApplicationChart = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     axios
//       .get('http://localhost:5172/api/reports/application-status-summary')
//       .then((response) => {
//         const transformedData = response.data.map((job) => {
//           const yetToReview =
//             job.totalApplications - job.rejectedCount - job.scheduledCount;
//           return {
//             jobTitle: job.jobTitle,
//             totalApplications: job.totalApplications,
//             rejectedCount: job.rejectedCount,
//             scheduledCount: job.scheduledCount,
//             yetToReview: yetToReview < 0 ? 0 : yetToReview,
//           };
//         });
//         setData(transformedData);
//       })
//       .catch((error) => {
//         console.error('Error fetching application status summary', error);
//       });
//   }, []);

//   return (
//     <div
//       style={{
//         width: '100%',
//         height: '500px',
//         padding: '20px',
//         background: '#ffffff',
//         borderRadius: '12px',
//         boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
//         margin: '20px auto',
//       }}
//     >
//       <h2
//         style={{
//           textAlign: 'center',
//           marginBottom: '20px',
//           fontSize: '24px',
//           color: '#333',
//         }}
//       >
//         Job Application Status Summary
//       </h2>
//       <ResponsiveContainer width="100%" height="90%">
//         <BarChart
//           data={data}
//           margin={{ top: 20, right: 30, left: 40, bottom: 60 }}
//           barCategoryGap={20} // add spacing between grouped bars
//         >
//           <CartesianGrid stroke="#e0e0e0" vertical={true} />
//           <XAxis
//             dataKey="jobTitle"
//             angle={-25}
//             textAnchor="end"
//             interval={0}
//             height={80}
//           />
//           <YAxis
//             label={{
//               value: 'Application Count',
//               angle: -90,
//               position: 'insideLeft',
//               style: { textAnchor: 'middle' },
//             }}
//           />
//           <Tooltip />
//           <Legend />
//           <Bar dataKey="totalApplications" fill="#007bff" name="Total Applications" />
//           <Bar dataKey="rejectedCount" fill="#ff7f7f" name="Rejected" />
//           <Bar dataKey="scheduledCount" fill="#82ca9d" name="Interview Scheduled" />
//           <Bar dataKey="yetToReview" fill="#f0ad4e" name="Yet To Review" />
//         </BarChart>
//       </ResponsiveContainer>
//     </div>
//   );
// };

// export default JobApplicationChart;
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const JobApplicationChart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5172/api/reports/application-status-summary')
      .then((response) => {
        const transformedData = response.data.map((job) => {
          const yetToReview =
            job.totalApplications - job.rejectedCount - job.scheduledCount;
          return {
            jobTitle: job.jobTitle,
            totalApplications: job.totalApplications,
            rejectedCount: job.rejectedCount,
            scheduledCount: job.scheduledCount,
            yetToReview: yetToReview < 0 ? 0 : yetToReview,
          };
        });
        setData(transformedData);
      })
      .catch((error) => {
        console.error('Error fetching application status summary', error);
      });
  }, []);

  return (
    <div
      style={{
        width: '100%',
        maxHeight: '90vh',
        overflowY: 'auto',
        padding: '20px',
        background: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        margin: '20px auto',
      }}
    >
      <h2
        style={{
          textAlign: 'center',
          marginBottom: '20px',
          fontSize: '24px',
          color: '#333',
        }}
      >
        Job Application Status Summary
      </h2>

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {data.map((jobData, index) => (
          <div
            key={index}
            style={{
              width: '45%',
              minWidth: '300px',
              padding: '20px',
              border: '1px solid #ddd',
              borderRadius: '10px',
              background: '#f9f9f9',
              textAlign: 'center',
            }}
          >
            <h3
              style={{
                marginBottom: '10px',
                color: '#007bff',
                fontWeight: '600',
              }}
            >
              {jobData.jobTitle}
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart
                data={[jobData]} // single job data
                margin={{ top: 20, right: 20, left: 20, bottom: 10 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="jobTitle" hide />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="totalApplications" fill="#007bff" name="Total Applications" />
                <Bar dataKey="rejectedCount" fill="#ff7f7f" name="Rejected" />
                <Bar dataKey="scheduledCount" fill="#82ca9d" name="Interview Scheduled" />
                <Bar dataKey="yetToReview" fill="#f0ad4e" name="Yet To Review" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobApplicationChart;

