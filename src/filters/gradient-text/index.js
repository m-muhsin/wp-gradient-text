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
							<PanelBody title={__("Gradient Text")}>
								<GradientPicker
									__nextHasNoMargin
									value={gradientColors}
									onChange={(currentGradient) => setAttributes({ gradientColors: currentGradient })}
									gradients={[
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
