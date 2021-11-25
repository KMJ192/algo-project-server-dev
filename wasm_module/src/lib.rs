use wasm_bindgen::prelude::*;

#[cfg(test)]
mod tests {
    #[test]
    fn it_works() {
        let result = 2 + 2;
        assert_eq!(result, 4);
    }
}

#[wasm_bindgen]
pub fn test() -> String {
  String::from("Hello Wasm")
}