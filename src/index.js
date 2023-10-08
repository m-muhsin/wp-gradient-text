import { InspectorControls, useSetting } from '@wordpress/block-editor';
import {
	PanelBody,
	ButtonGroup,
	Button,
	GradientPicker,
} from '@wordpress/components';
import { addFilter } from '@wordpress/hooks';
import { __ } from '@wordpress/i18n';
import { useEffect } from '@wordpress/element';

const allowedBlocks = [
	'core/paragraph',
	'core/heading',
	'core/quote',
	'core/verse',
];

const customGradientPresets = [
	{
		name: 'JShine',
		gradient: 'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
		slug: 'jshine',
	},
	{
		name: 'Cool Sky',
		gradient: 'linear-gradient(135deg,#2980b9 0%,#6dd5fa 50%,#ffffff 100%)',
		slug: 'cool-sky',
	},
	{
		name: 'Lunada',
		gradient: 'linear-gradient(135deg,#5433FF 0%,#20BDFF 51%,#A5FECB 100%)',
		slug: 'lunada',
	},
	{
		name: 'Blue Raspberry',
		gradient: 'linear-gradient(135deg,#00B4DB 0%,#0083B0 100%)',
		slug: 'blue-raspberry',
	},
	{
		name: 'Citrus Peel',
		gradient: 'linear-gradient(135deg,#FDC830 0%,#F37335 100%)',
		slug: 'citrus-peel',
	},
	{
		name: 'Sin City Red',
		gradient: 'linear-gradient(135deg,#ED213A 0%,#93291E 100%)',
		slug: 'sin-city-red',
	},
	{
		name: 'Blue Skies',
		gradient: 'linear-gradient(135deg,#56CCF2 0%,#2F80ED 100%)',
		slug: 'blue-skies',
	},
	{
		name: 'Mango Pulp',
		gradient: 'linear-gradient(135deg,#F09819 0%,#EDDE5D 100%)',
		slug: 'mango-pulp',
	},
	{
		name: 'Frozen',
		gradient: 'linear-gradient(135deg,#403B4A 0%,#E7E9BB 100%)',
		slug: 'frozen',
	},
	{
		name: 'Rose Water',
		gradient: 'linear-gradient(135deg,#E55D87 0%,#5FC3E4 100%)',
		slug: 'rose-water',
	},
	{
		name: 'Moonlit Asteroid',
		gradient:
			'linear-gradient(135deg,#0F2027 0%, #203A43 0%, #2c5364 100%)',
		slug: 'moonlit-asteroid',
	},
	{
		name: 'Rastafarie',
		gradient:
			'linear-gradient(135deg,#1E9600 0%, #FFF200 0%, #FF0000 100%)',
		slug: 'rastafari',
	},
	{
		name: 'Frozen Dreams',
		gradient: 'linear-gradient(135deg,#FD6585 0%, #0D25B9 100%)',
		slug: 'frozen-dreams',
	},
	{
		name: 'Winter Neva',
		gradient: 'linear-gradient(135deg,#a1c4fd 0%, #c2e9fb 100%)',
		slug: 'winter-neva',
	},
	{
		name: 'Dusty Grass',
		gradient: 'linear-gradient(135deg,#d4fc79 0%, #96e6a1 100%)',
		slug: 'dusty-grass',
	},
	{
		name: 'Tempting Azure',
		gradient: 'linear-gradient(135deg,#84fab0 0%, #8fd3f4 100%)',
		slug: 'tempting-azure',
	},
	{
		name: 'Heavy Rain',
		gradient: 'linear-gradient(135deg,#cfd9df 0%, #e2ebf0 100%)',
		slug: 'heavy-rain',
	},
	{
		name: 'Amy Crisp',
		gradient: 'linear-gradient(135deg,#a6c0fe 0%, #f68084 100%)',
		slug: 'amy-crisp',
	},
	{
		name: 'Mean Fruit',
		gradient: 'linear-gradient(135deg,#fccb90 0%, #d57eeb 100%)',
		slug: 'mean-fruit',
	},
	{
		name: 'Deep Blue',
		gradient: 'linear-gradient(135deg,#e0c3fc 0%, #8ec5fc 100%)',
		slug: 'deep-blue',
	},
	{
		name: 'Ripe Malinka',
		gradient: 'linear-gradient(135deg,#f093fb 0%, #f5576c 100%)',
		slug: 'ripe-malinka',
	},
	{
		name: 'Cloudy Knoxville',
		gradient: 'linear-gradient(135deg,#fdfbfb 0%, #ebedee 100%)',
		slug: 'cloudy-knoxville',
	},
	{
		name: 'Malibu Beach',
		gradient: 'linear-gradient(135deg,#4facfe 0%, #00f2fe 100%)',
		slug: 'malibu-beach',
	},
	{
		name: 'Sunset Bliss',
		gradient: 'linear-gradient(135deg,#ff3eaa 0%, #ffa414 100%)',
		slug: 'sunset-bliss',
	},
];

const FilterBlocks = (settings) => {
	if (!allowedBlocks.includes(settings.name)) {
		return settings;
	}

	return {
		...settings,
		attributes: {
			...settings.attributes,
			hasGradient: {
				type: 'boolean',
				default: false,
			},
			gradientColors: {
				type: 'string',
				default:
					'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
			},
			uid: {
				type: 'string',
				default: '',
			},
		},

		edit: function Edit(props) {
			const { attributes, setAttributes } = props;
			const { uid, hasGradient, gradientColors } = attributes;

			useEffect(() => {
				if (!uid) {
					const uniqueId = `gradient-text-${Math.floor(
						Math.random() * 100000
					)}`;
					setAttributes({ uid: uniqueId });
				}
			}, [setAttributes, uid]);

			const userGradientPalette = useSetting('color.gradients.custom');
			const themeGradientPalette = useSetting('color.gradients.theme');
			const defaultGradientPalette = useSetting(
				'color.gradients.default'
			);
			const allGradients = [
				...(customGradientPresets || []),
				...(defaultGradientPalette || []),
				...(themeGradientPalette || []),
				...(userGradientPalette || []),
			];

			return (
				<>
					<InspectorControls>
						<PanelBody title={__('Gradient Text?')}>
							<ButtonGroup
								aria-label={__(
									'Gradient Text?',
									'gt-gradient-text'
								)}
							>
								{['Yes', 'No'].map((has) => {
									return (
										<Button
											key={has}
											isSmall
											variant={
												hasGradient ===
												(has === 'Yes' ? true : false)
													? 'primary'
													: undefined
											}
											onClick={() =>
												setAttributes({
													hasGradient: has === 'Yes',
												})
											}
										>
											{has}
										</Button>
									);
								})}
							</ButtonGroup>
						</PanelBody>
						{hasGradient && (
							<PanelBody
								title={__('Choose Colors', 'gt-gradient-text')}
							>
								<GradientPicker
									value={gradientColors}
									onChange={(currentGradient) =>
										setAttributes({
											gradientColors: currentGradient,
										})
									}
									gradients={allGradients}
								/>
							</PanelBody>
						)}
					</InspectorControls>
					{hasGradient ? (
						<div
							className={`is-gradient-text ${props.attributes.uid}`}
						>
							<style>
								{`
									.${props.attributes.uid} > *:not(style) {
										-webkit-text-fill-color: transparent;
										background: ${gradientColors};
										-webkit-background-clip: text;
										-webkit-box-decoration-break: clone;
										color: black;
									}
								`}
							</style>
							{settings.edit(props)}
						</div>
					) : (
						settings.edit(props)
					)}
				</>
			);
		},
		save(props) {
			const { attributes } = props;
			const { hasGradient, gradientColors } = attributes;
			return hasGradient ? (
				<div className={`is-gradient-text ${props.attributes.uid}`}>
					<style>
						{`
							.${props.attributes.uid} > *:not(style) {
								-webkit-text-fill-color: transparent;
								background: ${gradientColors};
								-webkit-background-clip: text;
								-webkit-box-decoration-break: clone;
								color: black;
							}
						`}
					</style>
					{settings.save(props)}
				</div>
			) : (
				settings.save(props)
			);
		},
	};
};

addFilter( 'blocks.registerBlockType', 'gt/grident-text', FilterBlocks );
