import { InspectorControls } from "@wordpress/block-editor";
import {
	PanelBody,
	ButtonGroup,
	Button,
	GradientPicker,
} from "@wordpress/components";
import { addFilter } from "@wordpress/hooks";
import { __ } from "@wordpress/i18n";

import "./style.scss";

const FilterBlocks = (settings) => {
	if (settings.name !== "core/paragraph" && settings.name !== "core/heading") {
		return settings;
	}

	const newSettings = {
		...settings,
		attributes: {
			...settings.attributes, // spread in old attributes so we don't lose them!
			hasGradient: {
				// Here is our new boolean attribute to know if we are having a griadent or not.
				type: "boolean",
				default: false,
			},
			// Here is our new string attribute to hold the gradient colors.
			gradientColors: {
				type: "string",
				default: "linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)",
			},
		},

		edit(props) {
			const { attributes, setAttributes } = props;
			const { hasGradient, gradientColors } = attributes;

			return (
				<>
					<InspectorControls>
						<PanelBody title={__("Gradient Text?")}>
							<ButtonGroup aria-label={__("Gradient Text?")}>
								{["Yes", "No"].map((has) => {
									return (
										<Button
											key={has}
											isSmall
											variant={
												hasGradient === (has === "Yes" ? true : false)
													? "primary"
													: undefined
											}
											onClick={() =>
												setAttributes({
													hasGradient: has === "Yes",
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
							<PanelBody title={__("Choose Colors")}>
								<GradientPicker
									__nextHasNoMargin
									value={gradientColors}
									onChange={(currentGradient) => setAttributes({ gradientColors: currentGradient })}
									gradients={[
										{
											name: 'Default',
											gradient:
												'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
											slug: 'default',
										},
										{
											name: 'Cool Sky',
											gradient:
												'linear-gradient(135deg,#2980b9 0%,#6dd5fa 50%,#ffffff 100%)',
											slug: 'cool-sky',
										},
										{
											name: 'Lunada',
											gradient:
												'linear-gradient(135deg,#5433FF 0%,#20BDFF 51%,#A5FECB 100%)',
											slug: 'lunada',
										},
										{
											name: 'Blue Raspberry',
											gradient:
												'linear-gradient(135deg,#00B4DB 0%,#0083B0 100%)',
											slug: 'blue-raspberry',
										},
										{
											name: 'Citrus Peel',
											gradient:
												'linear-gradient(135deg,#FDC830 0%,#F37335 100%)',
											slug: 'citrus-peel',
										},
										{
											name: 'Sin City Red',
											gradient:
												'linear-gradient(135deg,#ED213A 0%,#93291E 100%)',
											slug: 'sin-city-red',
										},
										{
											name: 'Blue Skies',
											gradient:
												'linear-gradient(135deg,#56CCF2 0%,#2F80ED 100%)',
											slug: 'blue-skies',
										},
										{
											name: 'Mango Pulp',
											gradient:
												'linear-gradient(135deg,#F09819 0%,#EDDE5D 100%)',
											slug: 'mango-pulp',
										},
										{
											name: 'Frozen',
											gradient:
												'linear-gradient(135deg,#403B4A 0%,#E7E9BB 100%)',
											slug: 'frozen',
										},
										{
											name: 'Rose Water',
											gradient:
												'linear-gradient(135deg,#E55D87 0%,#5FC3E4 100%)',
											slug: 'rose-water',
										},
										{
											name: 'JShine',
											gradient:
												'linear-gradient(135deg,#12c2e9 0%,#c471ed 50%,#f64f59 100%)',
											slug: 'jshine',
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
									]}
								/>
							</PanelBody>
						)}
					</InspectorControls>
					{hasGradient ? (
						<div
							className="is-filter-gradient-text"
							style={{ backgroundImage: gradientColors }}						>
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
				<div
					className="is-filter-gradient-text"
					style={{ backgroundImage: gradientColors }}
				>
					{settings.save(props)}
				</div>
			) : (
				settings.save(props)
			);
		},
	};

	return newSettings;
};

addFilter(
	"blocks.registerBlockType",
	"gt/grident-text",
	FilterBlocks,
);
