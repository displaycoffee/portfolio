/* Custom search param handling for the router. The defaults turn repeated keys into JSON
   (?tag=css&tag=html becomes ?tag=["css","html"]), so use plain query strings instead. */
export const search = {
	parse: (searchStr: string) => {
		const params = new URLSearchParams(searchStr);
		const parsed: Record<string, string | string[]> = {};

		params.forEach((_value, key) => {
			// Keep a single value as a string and repeated keys as an array
			if (!(key in parsed)) {
				const values = params.getAll(key);
				parsed[key] = values.length > 1 ? values : values[0];
			}
		});

		return parsed;
	},
	stringify: (searchParams: Record<string, unknown>) => {
		const params = new URLSearchParams();

		Object.entries(searchParams).forEach(([key, value]) => {
			// Add each value of a repeated key as its own parameter
			(Array.isArray(value) ? value : [value]).forEach((item) => {
				if (item !== undefined && item !== null) params.append(key, String(item));
			});
		});

		const query = params.toString();
		return query ? `?${query}` : '';
	},
};
