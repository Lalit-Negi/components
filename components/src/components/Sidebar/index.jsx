import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdHome, MdArrowDropDown, MdArrowForward } from "react-icons/md";
import { useEffect } from "react";

const sidebar = [
	{
		name: "home",
		link: "/",
		subMenu: [],
		spacing: false,
		icon: <MdHome className="w-6 h-6" />,
	},
	{
		name: "profile",
		link: "/",
		subMenu: [],
		icon: <MdHome className="w-6 h-6" />,
		spacing: false,
	},
	{
		name: "fronend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: true,
		subMenu: [
			{
				name: "next",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
				subMenu: [
					{
						name: "next",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
					{
						name: "react",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
				],
			},
			{
				name: "react",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "backend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [
			{
				name: "node",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "python",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "css framework",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: false,
		subMenu: [
			{
				name: "tailwind",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "material",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "contact",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [],
		spacing: true,
	},
	{
		name: "fronend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: true,
		subMenu: [
			{
				name: "next",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
				subMenu: [
					{
						name: "next",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
					{
						name: "react",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
				],
			},
			{
				name: "react",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "backend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [
			{
				name: "node",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "python",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "css framework",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: false,
		subMenu: [
			{
				name: "tailwind",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "material",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "contact",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [],
		spacing: true,
	},
	{
		name: "fronend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: true,
		subMenu: [
			{
				name: "next",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
				subMenu: [
					{
						name: "next",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
					{
						name: "react",
						link: "/",
						icon: <MdHome className="w-6 h-6" />,
						subMenu: [
							{
								name: "next",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
							{
								name: "react",
								link: "/",
								icon: <MdHome className="w-6 h-6" />,
							},
						],
					},
				],
			},
			{
				name: "react",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "backend",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [
			{
				name: "node",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "python",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "css framework",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		spacing: false,
		subMenu: [
			{
				name: "tailwind",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
			{
				name: "material",
				link: "/",
				icon: <MdHome className="w-6 h-6" />,
			},
		],
	},
	{
		name: "contact",
		link: "/",
		icon: <MdHome className="w-6 h-6" />,
		subMenu: [],
		spacing: true,
	},
];

const MenuItem = ({
	name,
	link,
	expand,
	subMenu,
	icon,
	spacing,
	handleExpand,
}) => {
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		if (!expand) {
			setOpenMenu(false);
		}
	}, [expand]);

	return (
		<>
			<div
				onClick={() => setOpenMenu((prev) => !prev)}
				className={`${
					spacing && "mt-5"
				} flex my-1 items-center justify-between rounded-lg hover:bg-slate-200 text-inherit py-2 px-3 duration-300 ease-linear`}>
				<Link to={link}>
					<div
						className="flex space-x-3 items-center"
						onClick={subMenu?.length > 0 ? () => handleExpand(true) : ""}>
						<i>{icon}</i>
						{expand && (
							<p className="capitalize font-medium text-[16px] truncate">
								{name}
							</p>
						)}
					</div>
				</Link>
				{subMenu?.length > 0 && expand && <MdArrowDropDown />}
			</div>
			<div className={openMenu ? "flex flex-col ml-5" : "hidden"}>
				{subMenu?.map((item) => (
					<MenuItem
						key={item.name}
						spacing={item.spacing}
						name={item.name}
						link={item.link}
						icon={item.icon}
						subMenu={item.subMenu}
						expand={expand}
					/>
				))}
			</div>
		</>
	);
};

const Sidebar = () => {
	const [expandMenu, setExpendMenu] = useState(true);
	return (
		<div
			className={`${
				expandMenu ? "max-w-[240px]" : "max-w-[70px]"
			} sidebar max-w-[240px] duration-300 overflow-y-scroll transition-all relative bg-slate-50 text-slate-700 shadow-2xl h-screen px-3 py-6`}>
			<div
				onClick={() => setExpendMenu((prev) => !prev)}
				className="absolute top-2 right-4 bg-slate-800 text-white w-9 h-9 rounded-full grid place-items-center">
				<MdArrowForward className={expandMenu ? "rotate-180" : ""} />
			</div>
			<div className="mt-12">
				{sidebar.map((item) => (
					<MenuItem
						handleExpand={setExpendMenu}
						expand={expandMenu}
						key={item.name}
						spacing={item.spacing}
						name={item.name}
						link={item.link}
						icon={item.icon}
						subMenu={item.subMenu}
					/>
				))}
			</div>
		</div>
	);
};

export default Sidebar;
