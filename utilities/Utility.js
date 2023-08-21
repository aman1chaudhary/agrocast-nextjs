import agrocast_features1 from '../public/images/about/agrocast_features1.jpg';
import agrocast_features2 from '../public/images/about/agrocast_features2.jpg';
import agrocast_features3 from '../public/images/about/agrocast_features3.jpg';

import test1 from '../public/images/testimonials/pic1.jpg';
import test2 from '../public/images/testimonials/pic2.jpg';
import test3 from '../public/images/testimonials/pic3.jpg';

import project1 from '../public/images/project/project1.jpg';
import project2 from '../public/images/project/project1.jpg';

import pic1 from '../public/images/our-team/pic1.jpg';
import pic2 from '../public/images/our-team/pic2.jpg';
import pic3 from '../public/images/our-team/pic3.jpg';
import pic4 from '../public/images/our-team/pic4.jpg';
import pic5 from '../public/images/our-team/pic5.jpg';


export const TeamData = [
    {
        images: pic1,
        name: "Dr. Harsh Shah",
        role: "CEO and CTO",
        LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
        Twitter: "https://twitter.com/"
    },
    {
        images: pic2,
        name: "Prof. Vimal Mishra",
        role: "Advisor",
        LinkedIn: "https://www.linkedin.com/in/vimal-mishra-21162265/",
        Twitter: "https://twitter.com/i/flow/login?redirect_after_login=%2Fintent%2Ffollow%3Foriginal_referer%3Dhttps%253A%252F%252Fvmishra.people.iitgn.ac.in%252F%26ref_src%3Dtwsrc%255Etfw%257Ctwcamp%255Ebuttonembed%257Ctwterm%255Efollow%257Ctwgr%255Evmishraiit%26region%3Dfollow_link%26screen_name%3Dvmishraiit%26original_referer%3Dhttps%3A%2F%2Fvmishra.people.iitgn.ac.in%2Fwater%26climate%2F#/people/current"
    },
    {
        images: pic3,
        name: "Mrs. Shaily Shah",
        role: "Director",
        LinkedIn:"https://www.linkedin.com/",
        Twitter:"https://twitter.com/",
    },
    {
        images: pic5,
        name: "Dr. Azaz Pathan",
        role: "Sr. Water Resource Engineer",
        LinkedIn:"https://www.linkedin.com/",
        Twitter:"https://twitter.com/",
    },
    {
        images: pic4,
        name: "Mr. Meen Patel",
        role: "Jr. Civil Engineer",
        LinkedIn:"https://www.linkedin.com/",
        Twitter:"https://twitter.com/",
    },

]



export const AgrocastFeatures = [
    {
        image: agrocast_features1,
        title: 'Weather Forecast',
        description: ["Applicable for marginal farm sizes (less than 1 hectare). Get map of vegetation indices (NDVI", "NDMI and EVI). Time series analysis for vegetation indices.", "Get near real time images at 5-7 days interval."]
    },
    {
        image: agrocast_features2,
        title: 'Get local weather forecast on hourly to daily time step. Information about rainfall',
        description: []
    },
    {
        image: agrocast_features3,
        title: 'Geography And Season Geography And Season Specific Crop Calendar',
        description: []
    },
];






export const counterSection = [
    { icon: <i className="icon ti-bag m-r10 text-primary" />, num: '4', title: 'Years in Business', },
    { icon: <i className="icon ti-user m-r10 text-primary" />, num: '100', title: 'Happy Clients', },
    { icon: <i className="icon flaticon-users text-primary" />, num: '10', title: 'Technical Experts', },
    { icon: <i className="icon ti-mobile m-r10 text-primary" />, num: '1000', title: 'Apps Delivered', },
];


export const Testinomial = [
    { image: test1 }, { image: test2 }, { image: test3 },

]



export const FaqsQuestions = [
    {
        title: 'Question 1',
        text:
            'Answer 1',
    },
    {
        title: 'Question 2',
        text:
            'Answer 2',
    },
    {
        title: 'Question 3',
        text:
            'Answer 3',
    },
    {
        title: 'Question 4',
        text:
            'Answer 4',
    },
    {
        title: 'Question 5',
        text:
            'Answer 5',
    },


]


export const ProjectsData = [
    {
        ProjectTitle: "Flood Inundation Mapping",
        Image: project1,
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    }, {
        ProjectTitle: "Drainage Study",
        Image: project2,
        Description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled",
    },
]




export const ListProjects = {"type":"FeatureCollection", "features": [
    { "type": "Feature", "properties": { "Sr No": 1, "ProjectName": "Flood inundation mapping for Surat Metro under climate change scenario", "District": "Surat", "State": "Gujarat", "Country": "India", "Lat": 21.1702, "Lon": 72.8311, "Client": "GMRC and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 72.8311, 21.1702 ] } },
    { "type": "Feature", "properties": { "Sr No": 2, "ProjectName": "Hydrology assessment and drainage design for Solar Park", "District": "Bhavnagar", "State": "Gujarat", "Country": "India", "Lat": 21.90139, "Lon": 72.113597, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.113597, 21.90139 ] } },
    { "type": "Feature", "properties": { "Sr No": 3, "ProjectName": "Drainage planning at Khavda, Kutch.", "District": "Kutchh", "State": "Gujarat", "Country": "India", "Lat": 24.063255, "Lon": 69.5216264, "Client": "NTPC and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 69.5216264, 24.063255 ] } },
    { "type": "Feature", "properties": { "Sr No": 4, "ProjectName": "Preparation of Bhutan’s Long-Term Low Greenhouse Gas Emission and Climate Resilient Development Strategy", "District": "All", "State": "All", "Country": "Bhutan", "Lat": 27.5142, "Lon": 90.4336, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 90.4336, 27.5142 ] } },
    { "type": "Feature", "properties": { "Sr No": 5, "ProjectName": "Climate change impacts on water availability", "District": "All", "State": "Meghalaya", "Country": "India", "Lat": 25.467, "Lon": 91.3662, "Client": "GCRS" }, "geometry": { "type": "Point", "coordinates": [ 91.3662, 25.467 ] } },
    { "type": "Feature", "properties": { "Sr No": 6, "ProjectName": "Hydrology Assessment for Solar Park Site Selection", "District": "Banaskatha", "State": "Gujarat", "Country": "India", "Lat": 24.476706, "Lon": 71.307829, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 71.307829, 24.476706 ] } },
    { "type": "Feature", "properties": { "Sr No": 7, "ProjectName": "Hydrology Report and Drainage Recommendation for Solar park", "District": "Jodhpur", "State": "Rajasthan", "Country": "India", "Lat": 27.525296, "Lon": 72.375228, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.375228, 27.525296 ] } },
    { "type": "Feature", "properties": { "Sr No": 8, "ProjectName": "Hydrological investigation -Carrying out for assessing aquifer capacity yield/life and detailed geophysical and geohydrological resistivity test and sub-surface micro-level investigation work for pinpointing the most feasible location for withdrawal and recharge for Bullet project", "District": "Ahmedabad", "State": "Gujarat", "Country": "India", "Lat": 23.099269, "Lon": 72.567737, "Client": "SCC and CASAD and NHRCL" }, "geometry": { "type": "Point", "coordinates": [ 72.567737, 23.099269 ] } },
    { "type": "Feature", "properties": { "Sr No": 9, "ProjectName": "Sharmishtha lake overflow study", "District": "Vadnagar", "State": "Gujarat", "Country": "India", "Lat": 23.788114, "Lon": 72.642637, "Client": "ASI and IIT GN" }, "geometry": { "type": "Point", "coordinates": [ 72.642637, 23.788114 ] } },
    { "type": "Feature", "properties": { "Sr No": 10, "ProjectName": "Groundwater availability study ", "District": "Jaisalmer", "State": "Rajasthan", "Country": "India", "Lat": 26.85152778, "Lon": 71.50566667, "Client": "Adani" }, "geometry": { "type": "Point", "coordinates": [ 71.50566667, 26.85152778 ] } },
    { "type": "Feature", "properties": { "Sr No": 11, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Mungeli", "State": "Chhattisgarh", "Country": "India", "Lat": 22.03067, "Lon": 81.640429, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 81.640429, 22.03067 ] } },
    { "type": "Feature", "properties": { "Sr No": 12, "ProjectName": "Hydrology study for the upcoming solar plant.", "District": "Mau", "State": "UttarPradesh", "Country": "India", "Lat": 25.939622, "Lon": 83.780663, "Client": "AMP Energy " }, "geometry": { "type": "Point", "coordinates": [ 83.780663, 25.939622 ] } },
    { "type": "Feature", "properties": { "Sr No": 13, "ProjectName": "Hydrology study for the upcoming substation.", "District": "Jamnagar", "State": "Gujarat", "Country": "India", "Lat": 22.369696, "Lon": 70.193238, "Client": "AMP Energy " }, "geometry": { "type": "Point", "coordinates": [ 70.193238, 22.369696 ] } },
    { "type": "Feature", "properties": { "Sr No": 14, "ProjectName": "Topography survey and Hydrology assessment for 10 MW solar plant", "District": "Chitradurga", "State": "Karnataka", "Country": "India", "Lat": 14.075201, "Lon": 76.676312, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 76.676312, 14.075201 ] } },
    { "type": "Feature", "properties": { "Sr No": 15, "ProjectName": "Topography survey and Hydrology assessment for 130 MW solar plant ", "District": "Chitradurga", "State": "Karnataka", "Country": "India", "Lat": 14.141461, "Lon": 76.687075, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 76.687075, 14.141461 ] } },
    { "type": "Feature", "properties": { "Sr No": 16, "ProjectName": "Hydrology assessment for 10 MW solar plant", "District": "Ramanathapuram", "State": "Tamil Nadu", "Country": "India", "Lat": 9.796764, "Lon": 78.900645, "Client": "Arja Energys" }, "geometry": { "type": "Point", "coordinates": [ 78.900645, 9.796764 ] } },
    { "type": "Feature", "properties": { "Sr No": 17, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Thooothukudi", "State": "Tamil Nadu", "Country": "India", "Lat": 9.025636, "Lon": 78.089215, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 78.089215, 9.025636 ] } },
    { "type": "Feature", "properties": { "Sr No": 18, "ProjectName": "Site suitability study for upcoming solar plant", "District": "Kutchh", "State": "Gujarat", "Country": "India", "Lat": 24.022837, "Lon": 69.560585, "Client": "BluPine Energy" }, "geometry": { "type": "Point", "coordinates": [ 69.560585, 24.022837 ] } },
    { "type": "Feature", "properties": { "Sr No": 19, "ProjectName": "Flood Risk Assessment (FRA) for upcoming solar plant", "District": "Jhansi", "State": "UttarPradesh", "Country": "India", "Lat": 25.558169, "Lon": 79.091772, "Client": "Deloitte LLP" }, "geometry": { "type": "Point", "coordinates": [ 79.091772, 25.558169 ] } },
    { "type": "Feature", "properties": { "Sr No": 20, "ProjectName": "Hydrology Report and Drainage Recommendation for Solar park", "District": "Jodhpur", "State": "Rajasthan", "Country": "India", "Lat": 27.593868, "Lon": 72.43868, "Client": "Azure Power" }, "geometry": { "type": "Point", "coordinates": [ 72.43868, 27.593868 ] } }
    ]}


    export const MajorEarthquakes={"type":"FeatureCollection", "features": [
        {"type":"Feature","geometry":{"type":"Point","coordinates":[74.60000000000008,34.10000000000008,7,-1.7976931348623157e+308]},"properties":{"DATE":"1885 MAY 30","Lat__Deg_N":34.1,"Lat__Deg_E":74.6,"LOCATION":"SOPOR, J&K;","MAGNITUDE":7}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[91.00000000000006,26.000000000000057,8.69999999999709,-1.7976931348623157e+308]},"properties":{"DATE":"1897 JUN 12","Lat__Deg_N":26,"Lat__Deg_E":91,"LOCATION":"SHILLONG PLATEAU","MAGNITUDE":8.7}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[76.30000000000007,32.30000000000007,8,-1.7976931348623157e+308]},"properties":{"DATE":"1905 APR 04","Lat__Deg_N":32.3,"Lat__Deg_E":76.3,"LOCATION":"KANGRA, H.P","MAGNITUDE":8}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[91.00000000000006,24.500000000000057,7.600000000005821,-1.7976931348623157e+308]},"properties":{"DATE":"1918 JUL 08","Lat__Deg_N":24.5,"Lat__Deg_E":91,"LOCATION":"SRIMANGAL, ASSAM","MAGNITUDE":7.6}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[90.20000000000005,25.800000000000068,7.100000000005821,-1.7976931348623157e+308]},"properties":{"DATE":"1930 JUL 02","Lat__Deg_N":25.8,"Lat__Deg_E":90.2,"LOCATION":"DHUBRI, ASSAM","MAGNITUDE":7.1}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[86.80000000000007,26.600000000000023,8.30000000000291,-1.7976931348623157e+308]},"properties":{"DATE":"1934 JAN 15","Lat__Deg_N":26.6,"Lat__Deg_E":86.8,"LOCATION":"BIHAR-NEPALBORDER","MAGNITUDE":8.3}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[92.50000000000006,12.400000000000034,8.10000000000582,-1.7976931348623157e+308]},"properties":{"DATE":"1941 JUN 26","Lat__Deg_N":12.4,"Lat__Deg_E":92.5,"LOCATION":"ANDAMAN ISLANDS","MAGNITUDE":8.1}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[94.00000000000006,26.800000000000068,7.19999999999709,-1.7976931348623157e+308]},"properties":{"DATE":"1943 OCT 23","Lat__Deg_N":26.8,"Lat__Deg_E":94,"LOCATION":"ASSAM","MAGNITUDE":7.2}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[96.70000000000005,28.500000000000057,8.5,-1.7976931348623157e+308]},"properties":{"DATE":"1950 AUG 15","Lat__Deg_N":28.5,"Lat__Deg_E":96.7,"LOCATION":"ARUNACHAL PRADESH-CHINA BORDER","MAGNITUDE":8.5}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[70.00000000000006,23.300000000000068,7,-1.7976931348623157e+308]},"properties":{"DATE":"1956 JUL 21","Lat__Deg_N":23.3,"Lat__Deg_E":70,"LOCATION":"ANJAR, GUJARAT","MAGNITUDE":7}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[73.75000000000006,17.37000000000006,6.5,-1.7976931348623157e+308]},"properties":{"DATE":"1967 DEC 10","Lat__Deg_N":17.37,"Lat__Deg_E":73.75,"LOCATION":"KOYNA, MAHARASHTRA","MAGNITUDE":6.5}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[78.49000000000007,32.38000000000005,6.19999999999709,-1.7976931348623157e+308]},"properties":{"DATE":"1975 JAN 19","Lat__Deg_N":32.38,"Lat__Deg_E":78.49,"LOCATION":"KINNAUR, HP","MAGNITUDE":6.2}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[95.15000000000003,25.130000000000052,6.600000000005821,-1.7976931348623157e+308]},"properties":{"DATE":"1988 AUG 06","Lat__Deg_N":25.13,"Lat__Deg_E":95.15,"LOCATION":"MANIPUR-MYANMAR BORDER","MAGNITUDE":6.6}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[86.63000000000005,26.720000000000027,6.399999999994179,-1.7976931348623157e+308]},"properties":{"DATE":"1988 AUG 21","Lat__Deg_N":26.72,"Lat__Deg_E":86.63,"LOCATION":"BIHAR-NEPAL BORDER","MAGNITUDE":6.4}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[78.86000000000007,30.750000000000057,6.600000000005821,-1.7976931348623157e+308]},"properties":{"DATE":"1991 OCT 20","Lat__Deg_N":30.75,"Lat__Deg_E":78.86,"LOCATION":"UTTARKASHI, UP HILLS","MAGNITUDE":6.6}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[76.62000000000006,18.07000000000005,6.30000000000291,-1.7976931348623157e+308]},"properties":{"DATE":"1993 SEP 30","Lat__Deg_N":18.07,"Lat__Deg_E":76.62,"LOCATION":"LATUR-OSMANABAD, MAHARASHTRA","MAGNITUDE":6.3}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[80.06000000000006,23.08000000000004,6,-1.7976931348623157e+308]},"properties":{"DATE":"1997 MAY 22","Lat__Deg_N":23.08,"Lat__Deg_E":80.06,"LOCATION":"JABALPUR,MP","MAGNITUDE":6}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[79.42000000000007,30.410000000000025,6.80000000000291,-1.7976931348623157e+308]},"properties":{"DATE":"1999 MAR 29","Lat__Deg_N":30.41,"Lat__Deg_E":79.42,"LOCATION":"CHAMOLI DIST, UP","MAGNITUDE":6.8}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[70.28000000000003,23.400000000000034,7.69999999999709,-1.7976931348623157e+308]},"properties":{"DATE":"2001 JAN 26","Lat__Deg_N":23.4,"Lat__Deg_E":70.28,"LOCATION":"BHUJ , GUJARAT","MAGNITUDE":7.7}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[96.13000000000005,3.340000000000032,9.30000000000291,-1.7976931348623157e+308]},"properties":{"DATE":"2004 DEC 26","Lat__Deg_N":3.34,"Lat__Deg_E":96.13,"LOCATION":"OFF WEST COAST OF SUMATRA","MAGNITUDE":9.3}},
        {"type":"Feature","geometry":{"type":"Point","coordinates":[73.15000000000003,34.490000000000066,7.600000000005821,-1.7976931348623157e+308]},"properties":{"DATE":"2005 OCT 08","Lat__Deg_N":34.49,"Lat__Deg_E":73.15,"LOCATION":"PAKISTAN","MAGNITUDE":7.6}}
        ]}
    
    
