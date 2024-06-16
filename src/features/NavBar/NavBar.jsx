import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import MenuItem from '../../components/MenuItem';
import Button from '../../components/Button';
import styles from './NavBar.module.scss';

const menuItems = [
	{ name: 'Home', link: '#' },
	{ name: 'About', link: '#about' },
	{ name: 'Projects', link: '#projects' },
	{ name: 'Contact', link: '#' },
];

const NavBar = () => {
	const [activeMenuItem, setActiveMenuItem] = useState(menuItems[0].name);
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	const handleMenuButtonClick = () => {
		setIsDrawerOpen((isOpen) => !isOpen);
	};

	return (
		<header className={styles.header}>
			<nav className={styles.nav}>
				<IconButton
					type="button"
					classes={styles.menuButton}
					sx={{
						padding: '2rem',
					}}
					onClick={handleMenuButtonClick}
				>
					{isDrawerOpen ? (
						<CloseIcon className={styles.menuButtonIcon} />
					) : (
						<MenuIcon className={styles.menuButtonIcon} />
					)}
				</IconButton>
				<ul className={styles.navContainer}>
					{menuItems.map((item) => {
						if (item.name === 'Contact') {
							return (
								<Button key={item.name} color="secondary">
									{item.name}
								</Button>
							);
						}
						return (
							<MenuItem
								key={item.name}
								href={item.link}
								active={item.name === activeMenuItem}
								onClick={() => setActiveMenuItem(item.name)}
							>
								{item.name}
							</MenuItem>
						);
					})}
				</ul>
				{!isDrawerOpen || (
					<ul className={styles.navContainerMobile}>
						{menuItems.map((item) => (
							<MenuItem
								key={item.name}
								href={item.link}
								active={item.name === activeMenuItem}
								onClick={() => {
									setIsDrawerOpen(false);
									setActiveMenuItem(item.name);
								}}
							>
								{item.name}
							</MenuItem>
						))}
					</ul>
				)}
			</nav>
		</header>
	);
};

NavBar.propTypes = {};

export default NavBar;
