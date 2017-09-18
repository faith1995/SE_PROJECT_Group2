-- phpMyAdmin SQL Dump
-- version 4.7.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Sep 10, 2017 at 11:01 AM
-- Server version: 5.5.57-cll
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `loopdbut_trader`
--

-- --------------------------------------------------------

--
-- Table structure for table `professionals`
--

CREATE TABLE `professionals` (
  `PrimaryKey` int(11) NOT NULL,
  `Name` varchar(50) NOT NULL,
  `Service` varchar(255) NOT NULL,
  `SubService` varchar(255) NOT NULL,
  `Business` varchar(3) NOT NULL,
  `Country` varchar(255) NOT NULL,
  `Region` varchar(255) NOT NULL,
  `Bio` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `professionals`
--

INSERT INTO `professionals` (`PrimaryKey`, `Name`, `Service`, `SubService`, `Business`, `Country`, `Region`, `Bio`) VALUES
(1, 'Vishaal Joshi ', 'Bricklayer', 'Blockwork', 'No', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(2, 'Vishaal Joshi ', 'Bricklayer', 'Brickwork', 'No', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(3, 'Matthew Osler', 'Bricklayer', 'Paving', 'Yes', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(4, 'Matthew Osler', 'Builder', 'Underfloor Heating', 'No', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(5, 'Vishaal Joshi', 'Bricklayer', 'Brickwork', 'Yes', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'),
(6, 'Matthew Osler', 'Bricklayer', 'Tiles', 'Yes', 'South Africa', 'Gauteng', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.');

-- --------------------------------------------------------

--
-- Table structure for table `services`
--

CREATE TABLE `services` (
  `PrimaryKey` int(11) NOT NULL,
  `Service` varchar(50) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `services`
--

INSERT INTO `services` (`PrimaryKey`, `Service`) VALUES
(1, 'Aerial & Network Specialist'),
(2, 'Air Conditioning & Heating '),
(3, 'Architect, Surveyor, Certifications  '),
(4, 'Bathrooms & Sauna'),
(5, 'Blinds, Curtain & Mirror'),
(6, 'Bricklayer'),
(7, 'Builder'),
(8, 'Carpenter / Joiner'),
(9, 'Cleaning Services'),
(10, 'Damp, Drainage & Septic`s'),
(11, 'Electrician'),
(12, 'Flooring Specialists'),
(13, 'Garden & Landscaping'),
(14, 'Gas Engineer'),
(15, 'General Labourer'),
(16, 'Ground works'),
(17, 'Handyman'),
(18, 'Kitchen Specialist'),
(19, 'Metal & Steel'),
(20, 'Move & Removal (Storage)'),
(21, 'Paint & Decorate'),
(22, 'Paving & Driveways'),
(23, 'Plasterer / Renderer'),
(24, 'Plumber Specialist'),
(25, 'Pool & Jacuzzi'),
(26, 'Renewable Energy'),
(27, 'Roof Specialists'),
(28, 'Scaffold, Platforms, Barriers'),
(29, 'Security, Fire & Safety'),
(30, 'Signage'),
(31, 'Tiler Specialist'),
(32, 'Mechanic'),
(33, '-');

-- --------------------------------------------------------

--
-- Table structure for table `subservices`
--

CREATE TABLE `subservices` (
  `PrimaryKey` int(11) NOT NULL,
  `ServiceKey` int(11) NOT NULL,
  `SubService` varchar(100) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `subservices`
--

INSERT INTO `subservices` (`PrimaryKey`, `ServiceKey`, `SubService`) VALUES
(2, 1, 'External and Internal Cabling '),
(3, 1, 'Arial & Satellite  (DSTV)                                           '),
(4, 1, 'Computer/ Network                                           '),
(5, 2, 'Air Con install & Service '),
(6, 2, 'Commercial or Industrial Systems'),
(7, 2, 'Under Floor heating'),
(8, 2, 'Ceiling Fans'),
(9, 2, 'Extractor Fans'),
(10, 2, 'Evaporative Air Coolers'),
(11, 2, 'Storage Heating'),
(12, 2, 'Electric Heaters'),
(13, 2, 'Air Conditioning (Portable)'),
(14, 2, 'Gas heaters (portable)'),
(15, 2, 'Gas & Storage heating (Central heating)'),
(16, 2, 'Heated Towel racks'),
(17, 2, 'Kitchen Canopies & Extraction System'),
(18, 2, 'Fresh Air Supply Systems '),
(19, 3, 'Plumbing Certifications          '),
(20, 3, 'Mold Inspections'),
(21, 3, 'Pest Clearance Certificates '),
(22, 3, 'Fire & Safety Inspections'),
(23, 3, 'Gas Inspections '),
(24, 3, 'Woodworm Inspection'),
(25, 3, 'Asbestos Surveyor'),
(26, 3, 'Architectural'),
(27, 3, 'Building Surveyor'),
(28, 3, 'Electrical Certifications'),
(29, 3, 'Drainage Surveys'),
(30, 3, 'Energy Performance Certificates'),
(31, 3, 'Ecological Serveys'),
(32, 3, 'Drawings '),
(33, 4, 'Complete refurbishment     '),
(34, 4, 'Installation only'),
(35, 4, 'Wet rooms  '),
(36, 4, 'Disabled approved   '),
(37, 4, 'Bathroom Tiling '),
(38, 4, 'Shower cubicles '),
(39, 4, 'Saunas '),
(40, 4, 'Steam rooms'),
(41, 4, 'Hammam`s'),
(42, 4, 'Sealing work  [silicone]'),
(43, 4, 'Plumbing'),
(44, 5, 'Sales & Installations  '),
(45, 5, 'Auto Glass (mobile service) '),
(46, 5, 'Shop Front`s Glass'),
(47, 5, 'Mirror`s & 2 way Mirror`s '),
(48, 5, 'Custom made Curtain & Blinds '),
(49, 5, 'Glass '),
(50, 5, 'Sunblock film for windows'),
(51, 6, 'Brick Specialist'),
(52, 6, 'Facework'),
(53, 6, 'Blockwork '),
(54, 6, 'Paving'),
(55, 6, 'Form work-Concrete  '),
(56, 6, 'Bricklayer'),
(57, 7, 'Staircases [Wooden - Metal - Glass]  '),
(58, 7, 'Extensions & Garage`s'),
(59, 7, 'New Builds                              '),
(60, 7, 'Refurbishments / Reconfigurations '),
(61, 7, 'Basement or Loft Conversions'),
(62, 7, 'Complete Renovations '),
(63, 7, 'Drainage & Foundations'),
(64, 7, 'Commercial  [Shop fronts & Offices] '),
(65, 7, 'Timber Frame Buildings'),
(66, 7, 'Garage Doors / Electric Gates'),
(67, 7, 'Sheds & Wendy\'s '),
(68, 7, 'Perimeter Walling & VibraCrete'),
(69, 7, 'Sliding doors & Windows '),
(70, 8, 'Bespoke furnisher                                       '),
(71, 8, 'Cabinet & Wardrobes                                              '),
(72, 8, 'Cladding'),
(73, 8, 'Ceilings & Coving                                         '),
(74, 8, 'Doors'),
(75, 8, 'Facia & Soffits (Guttering)'),
(76, 8, 'Floor & SkirtingÕs                                        '),
(77, 8, 'Kitchen Fitting                                              '),
(78, 8, 'Roofer'),
(79, 8, 'Shelving'),
(80, 8, 'Plaster Board /Dry Lining                                                                           '),
(81, 8, 'Partition walling                                          '),
(82, 8, 'Shuttering                                    '),
(83, 8, 'Small repairs'),
(84, 8, 'Staircases'),
(85, 8, 'Decking                                              '),
(86, 8, 'Handrails / Balustrades'),
(87, 8, 'Shop/ Bar Fitting'),
(88, 9, 'Home or Office  '),
(89, 9, 'Garden cleaning                                         '),
(90, 9, 'Waist bin Cleaning            '),
(91, 9, 'Pool cleaning'),
(92, 9, 'Removals: Garden Waste                           '),
(93, 9, 'Car Wash (@ your home service)                      '),
(94, 9, 'Window Cleaning '),
(95, 9, 'Environmentally Hazardous Materials    '),
(96, 9, 'Removals: Building rubble'),
(97, 9, 'Septic tanks '),
(98, 9, 'Removals: Commercial waste'),
(99, 9, 'Removals: Domestic waste'),
(100, 9, 'Ceilings / Floors '),
(101, 10, 'Blocked drains  '),
(102, 10, 'CCTV drain surveys   '),
(103, 10, 'Rain & Flood drainage'),
(104, 10, 'Blocked Sewers '),
(105, 10, 'Septic Tank Emptying & Cleaning'),
(106, 10, 'Basement Waterproofing'),
(107, 10, 'Condensation control'),
(108, 10, 'Toxic mould detection'),
(109, 10, 'Dry & wet rot control '),
(110, 10, 'Structural Waterproofing '),
(111, 10, 'Rising damp'),
(112, 0, 'Fault Finding & Maintenance '),
(113, 11, 'Fuse Box/ consumer units'),
(114, 11, 'Tripping circuits '),
(115, 11, 'Extractor Fans'),
(116, 11, 'Smoke Alarms'),
(117, 11, 'Electric Showers'),
(118, 11, 'Home Rewiring '),
(119, 11, 'External Flood & Garden Lights  '),
(120, 11, 'Kitchen Rewiring '),
(121, 11, 'Ceiling Lights '),
(122, 11, 'Under Floor Heating '),
(123, 11, 'Heating and Ventilation'),
(124, 11, 'Garage Doors / Electric Gates'),
(125, 11, 'Emergency Services '),
(126, 11, 'Prepaid Meters'),
(127, 11, 'New Home / Building'),
(128, 11, 'Certificate of Compliance '),
(129, 12, 'Carpet Instalations              '),
(130, 12, 'Decking '),
(131, 12, 'Under Floor heating       '),
(132, 12, 'Floor sanding                                  '),
(133, 12, 'Laminate / Real wood      '),
(134, 12, 'Paving / Driveways                 '),
(135, 12, 'Floor Tiling         '),
(136, 12, 'Levelling / Screeding                                                   '),
(137, 12, 'Woodworm Specialist                                                                                 '),
(138, 12, 'Parquet Flooring'),
(139, 12, 'Rubber / Plastic / Linoleum'),
(140, 12, 'Polished Concrete '),
(141, 13, 'Cleaning & Maintenance   '),
(142, 13, 'Design & Landscaping'),
(143, 13, 'Tree surgeons (tree removals)  '),
(144, 13, 'Irrigation systems'),
(145, 13, 'Lightning solutions  '),
(146, 13, 'Decking'),
(147, 13, 'Green Houses                    '),
(148, 13, ' Furnisher for Gardens                              '),
(149, 13, 'BBQ`s & Fire Pitts         '),
(150, 13, 'Garden Waist removals '),
(151, 13, 'Garden Art'),
(152, 13, 'Garden Edgings (bordering`s)'),
(153, 14, 'Central/ Home heating                               '),
(154, 14, 'Home Appliance                                                  '),
(155, 14, 'Boiler Breakdown'),
(156, 14, 'Heating Controls'),
(157, 14, 'Boiler Servicing'),
(158, 14, 'Boiler Replacements'),
(159, 14, 'Radiator Replacements'),
(160, 14, 'System Flushes'),
(161, 14, 'Inspections & Service Certificates '),
(162, 14, 'Prepaid Meters'),
(163, 15, 'Building'),
(164, 15, 'Garden'),
(165, 15, 'Farm work'),
(166, 15, 'Cleaning'),
(167, 15, 'Transport / Moving '),
(168, 16, 'Machine rentals '),
(169, 16, 'Excavation'),
(170, 16, 'Below Ground Drainage'),
(171, 16, 'Form work (Concrete Shuttering)  '),
(172, 16, 'Concrete placing'),
(173, 16, 'Suspended drainage'),
(174, 17, ''),
(175, 18, 'Design & Sales   '),
(176, 18, 'Installations only'),
(177, 18, 'Kitchen Worktops                                  '),
(178, 18, 'Complete Refurbish-Renovating     '),
(179, 18, 'Traditional-Bespoke  [hand/custom made]'),
(180, 18, 'Kitchen Plumbing'),
(181, 18, 'Stone / Marble: Worktops'),
(182, 18, 'Kitchen Tiling'),
(183, 18, 'Electrics '),
(184, 19, 'Structural Work REINFORCEMENT'),
(185, 19, 'Staircases'),
(186, 19, 'Railings'),
(187, 19, 'Balconies'),
(188, 19, 'Balustrades'),
(189, 19, 'Stainless Steel'),
(190, 19, 'Kitchen Canopies & Extraction System'),
(191, 19, 'Welder'),
(192, 19, 'Bespoke Metalwork'),
(193, 19, 'Artistic Craftsman '),
(194, 19, 'Boilermaker'),
(195, 19, 'Blacksmith '),
(196, 20, 'Man & Van (short & small)'),
(197, 20, 'Deliveries & Collections'),
(198, 20, 'House / Flat  '),
(199, 20, 'Office / Commercial '),
(200, 20, 'Storage Solutions '),
(201, 20, 'Long Distance  '),
(202, 20, 'Express Delivery Services '),
(203, 20, 'Furnisher collecting service (charity)'),
(204, 20, 'Drivers Required  '),
(205, 21, 'External work                                  '),
(206, 21, ' Murals_ Artistic                                 '),
(207, 21, 'Roof Painting'),
(208, 21, 'Internal work'),
(209, 21, 'Wall & Lining paper '),
(210, 21, 'Floor Paining '),
(211, 21, 'Garage doors '),
(212, 21, 'New Home / building project'),
(213, 22, 'Brick Paving'),
(214, 22, 'Tar Paving'),
(215, 22, 'Kirbs'),
(216, 22, 'Concrete Paving '),
(217, 22, 'Natural Stone Paving'),
(218, 23, 'Ceilings & Walls '),
(219, 23, 'Exterior work'),
(220, 24, 'Kitchen '),
(221, 24, 'Bathrooms'),
(222, 24, 'Toilets and Taps'),
(223, 24, 'Tanks and Overflows'),
(224, 24, 'Pumps and Valves'),
(225, 24, 'Showers'),
(226, 24, 'Bursts and Leaks'),
(227, 24, 'Storage Cylinders'),
(228, 24, 'Radiators'),
(229, 24, 'Drainage '),
(230, 24, 'Boilers /  Geezers '),
(231, 24, 'New Home / Building'),
(232, 24, 'Certificate of Compliance '),
(233, 25, 'Pool Heaters'),
(234, 25, 'New Swimming Pools'),
(235, 25, 'Splash Pools'),
(236, 25, 'Maintenance & Cleaning'),
(237, 25, 'New Jacuzzi`s '),
(238, 25, 'Indoor Pools '),
(239, 26, 'Solar panels                                        '),
(240, 26, 'Hot water panels                                    '),
(241, 26, 'Wind turbines                                                                                       '),
(242, 26, 'Waterless Urinals '),
(243, 26, 'Thermal / Loft  Insulation'),
(244, 26, 'Pool heating'),
(245, 27, 'Leaks & Repairs                             '),
(246, 27, 'Guttering'),
(247, 27, 'Cleaning      '),
(248, 27, 'Painting'),
(249, 27, 'Insulating'),
(250, 27, 'Sky lights / Loft Windows             '),
(251, 27, 'Chimneys '),
(252, 27, 'Roof Carpenter  '),
(253, 27, 'Waterproofing '),
(254, 28, 'Scaffolding equipment'),
(255, 28, 'Aluminium Tower platforms '),
(256, 28, 'Temporary Roofing '),
(257, 28, 'Scaffolding Alarm Systems '),
(258, 28, 'Trade Employment '),
(259, 29, 'Security Seals & Safety Signs '),
(260, 29, 'Alarm Systems  [Fire & Security]                            '),
(261, 29, 'Armed Response Service                                             '),
(262, 29, 'CCTV Systems (products'),
(263, 29, 'Electric & Remote Gates'),
(264, 29, 'Garage Door                                                       '),
(265, 29, 'Intercom/ Entry systems'),
(266, 29, 'Internal security doors'),
(267, 29, 'House sitting / Monitor services                                                '),
(268, 29, 'Scaffolding alarm systems'),
(269, 29, 'Security Guards & Services'),
(270, 29, 'Health & Safety Operatives   '),
(271, 29, 'First Aid Operatives '),
(272, 29, 'Safe Supply & Install '),
(273, 29, 'Emergency Lightning '),
(274, 29, 'Fire Hose Reels '),
(275, 30, 'Shop Fronts'),
(276, 30, 'Vehicle Wrapping '),
(277, 30, 'Business Identities '),
(278, 31, 'Floor & Wall'),
(279, 31, 'Wet rooms'),
(280, 31, 'Roof'),
(281, 31, 'Kitchens & Bathrooms'),
(282, 31, 'Paving '),
(283, 31, 'Mosaic '),
(284, 32, 'General service and inspection'),
(285, 32, 'Brakes'),
(286, 32, 'Oil'),
(287, 32, 'Steering and suspension'),
(288, 32, 'Heating and cooling'),
(289, 32, 'Clutch services and installation'),
(290, 32, 'Diagnostics and systems evaluations'),
(291, 32, 'Belts and hoses'),
(292, 32, 'Gearbox');

-- --------------------------------------------------------

--
-- Table structure for table `tasks`
--

CREATE TABLE `tasks` (
  `ID` int(11) NOT NULL,
  `Uni` int(11) NOT NULL,
  `UserID` int(11) DEFAULT NULL,
  `Service` varchar(255) DEFAULT NULL,
  `SubService` varchar(255) DEFAULT NULL,
  `Requestor` varchar(255) DEFAULT NULL,
  `RequestorEmail` varchar(255) DEFAULT NULL,
  `Country` varchar(255) NOT NULL,
  `Province` varchar(255) NOT NULL,
  `Region` varchar(255) NOT NULL,
  `DateRequested` varchar(255) NOT NULL,
  `DateInvoiced` varchar(255) NOT NULL,
  `DateCompleted` varchar(255) NOT NULL,
  `InvoiceLocation` varchar(255) NOT NULL,
  `Status` varchar(255) NOT NULL,
  `ProjectDetails` text NOT NULL,
  `PersonalMessage` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

--
-- Dumping data for table `tasks`
--

INSERT INTO `tasks` (`ID`, `Uni`, `UserID`, `Service`, `SubService`, `Requestor`, `RequestorEmail`, `Country`, `Province`, `Region`, `DateRequested`, `DateInvoiced`, `DateCompleted`, `InvoiceLocation`, `Status`, `ProjectDetails`, `PersonalMessage`) VALUES
(2, 3, 1, 'Bricklayer', 'Blockwork', 'Nazeer Peer', 'nazeer@loop.joburg', 'South Africa', 'Gauteng', 'Johannesburg South', '2017-06-10', '', '', '', 'Open', '', ''),
(2, 18, NULL, 'Bricklayer', 'Blockwork', 'Nazeer Peer', NULL, '', '', 'Johannesburg South', '2017-08-03 17:16:58', '', '', '', '', '', ''),
(2, 17, NULL, 'Bricklayer', 'Blockwork', 'Nazeer Peer', NULL, '', '', 'Johannesburg South', '2017-08-03 17:13:57', '', '', '', '', '', ''),
(2, 16, NULL, 'Bricklayer', 'Blockwork', 'Nazeer Peer', NULL, '', '', 'Johannesburg South', '2017-08-03 15:29:08', '', '', '', '', '', '');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `firstname` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `profileurl` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  `user` varchar(255) DEFAULT NULL,
  `pass` varchar(100) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `profile_photo` varchar(200) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`uid`, `firstname`, `lastname`, `profileurl`, `role`, `user`, `pass`, `email`, `profile_photo`) VALUES
(1, 'Justin ', 'Weldon', NULL, '2', 'justin', 'justin', 'jweldon01@gmail.com', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `professionals`
--
ALTER TABLE `professionals`
  ADD PRIMARY KEY (`PrimaryKey`);

--
-- Indexes for table `services`
--
ALTER TABLE `services`
  ADD PRIMARY KEY (`PrimaryKey`);

--
-- Indexes for table `subservices`
--
ALTER TABLE `subservices`
  ADD PRIMARY KEY (`PrimaryKey`);

--
-- Indexes for table `tasks`
--
ALTER TABLE `tasks`
  ADD PRIMARY KEY (`Uni`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `username` (`user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `professionals`
--
ALTER TABLE `professionals`
  MODIFY `PrimaryKey` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `services`
--
ALTER TABLE `services`
  MODIFY `PrimaryKey` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=34;
--
-- AUTO_INCREMENT for table `subservices`
--
ALTER TABLE `subservices`
  MODIFY `PrimaryKey` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=293;
--
-- AUTO_INCREMENT for table `tasks`
--
ALTER TABLE `tasks`
  MODIFY `Uni` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
